package workout

import (
	"context"
	"errors"
	"fmt"
	"reflect"
	"strings"

	"github.com/google/uuid"
	"github.com/polyfit-live/polyfit/backend/internal/exercise"
	"github.com/polyfit-live/polyfit/backend/pkg/client/postgresql"
	"github.com/polyfit-live/polyfit/backend/pkg/logging"
	"github.com/polyfit-live/polyfit/backend/pkg/utils"

	"github.com/georgysavva/scany/pgxscan"
)

// Check whether db implements workout storage interface.
var _ Repository = &repository{}

type Repository interface {
	Create(ctx context.Context, wk Workout) (string, error)
	FindOne(ctx context.Context, id string) (*Workout, error)
	FindAll(ctx context.Context) (*[]Workout, error)
	Update(ctx context.Context, id string, wk Workout) error
	Delete(ctx context.Context, id string) error
}

type repository struct {
	client postgresql.Client
	logger *logging.Logger
}

func NewRepository(client postgresql.Client, logger *logging.Logger) Repository {
	return &repository{
		client: client,
		logger: logger,
	}
}
func (r *repository) Create(ctx context.Context, wk Workout) (string, error) {
	tx, err := r.client.Begin(ctx)
	if err != nil {
		return "", err
	}
	wkID := uuid.New().String()
	wk.ID = &wkID

	q := `INSERT INTO workout (`
	qFields := make([]string, 0, 2)
	qValues := make([]string, 0, 2)
	args := make([]interface{}, 0, 2)

	v := reflect.ValueOf(wk)
	i, counter := 0, 1
	for i < v.NumField() {
		field := v.Type().Field(i).Tag.Get("json")
		value := v.Field(i).Interface()
		if !v.Field(i).IsNil() {
			qFields = append(qFields, field)
			qValues = append(qValues, fmt.Sprintf(`$%v`, counter))
			args = append(args, value)
			counter++
		}
		i++
	}
	q += strings.Join(qFields, ", ") + ") VALUES (" + strings.Join(qValues, ", ") + ");"
	r.logger.Trace(q)
	commandTag, err := r.client.Exec(ctx, q, args...)
	if err != nil {
		return "", err
	}
	if commandTag.RowsAffected() != 1 {
		return "", errors.New("No row found to delete")
	}

	return wkID, tx.Commit(ctx)
}

func (r *repository) FindOne(ctx context.Context, id string) (*Workout, error) {
	q := `
		SELECT * FROM workout WHERE id = $1;
	`
	r.logger.Trace(fmt.Sprintf("SQL Query: %s", utils.FormatQuery(q)))

	rows, err := r.client.Query(ctx, q, id)

	if err != nil {
		return nil, err
	}

	var wk Workout

	sq := `
			SELECT
				e.*
			FROM
				workout_exercise we
			JOIN exercise e on e.id = we.exercise_id
			WHERE workout_id = $1;
		`
	err = pgxscan.ScanOne(&wk, rows)
	if err != nil {
		return nil, err
	}
	exercisesRows, err := r.client.Query(ctx, sq, wk.ID)
	if err != nil {
		return nil, err
	}

	exercises := make([]exercise.Exercise, 0)
	for exercisesRows.Next() {
		var ex exercise.Exercise

		err = pgxscan.ScanRow(&ex, exercisesRows)
		if err != nil {
			return nil, err
		}

		exercises = append(exercises, ex)
	}
	wk.Exercises = &exercises

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return &wk, nil
}

func (r *repository) FindAll(ctx context.Context) (w *[]Workout, err error) {
	q := `
		SELECT * FROM workout;
	`
	r.logger.Trace(fmt.Sprintf("SQL Query: %s", utils.FormatQuery(q)))

	rows, err := r.client.Query(ctx, q)

	if err != nil {
		return nil, err
	}

	workouts := make([]Workout, 0)

	for rows.Next() {
		var wk Workout

		sq := `
			SELECT
				e.*
			FROM
				workout_exercise we
			JOIN exercise e on e.id = we.exercise_id
			WHERE workout_id = $1;
		`
		err = pgxscan.ScanRow(&wk, rows)
		if err != nil {
			return nil, err
		}
		exercisesRows, err := r.client.Query(ctx, sq, wk.ID)
		if err != nil {
			return nil, err
		}

		exercises := make([]exercise.Exercise, 0)
		for exercisesRows.Next() {
			var ex exercise.Exercise

			err = pgxscan.ScanRow(&ex, exercisesRows)
			if err != nil {
				return nil, err
			}

			exercises = append(exercises, ex)
		}
		wk.Exercises = &exercises
		workouts = append(workouts, wk)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return &workouts, nil
}

func (r *repository) Update(ctx context.Context, id string, wk Workout) error {
	tx, err := r.client.Begin(ctx)
	if err != nil {
		return err
	}
	q := `UPDATE workout SET `
	qParts := make([]string, 0, 2)
	args := make([]interface{}, 0, 2)

	v := reflect.ValueOf(wk)
	i, counter := 0, 1
	for i < v.NumField() {
		field := v.Type().Field(i).Tag.Get("json")
		value := v.Field(i).Interface()
		if !v.Field(i).IsNil() {
			qParts = append(qParts, fmt.Sprintf("%v = $%v ", field, counter))
			args = append(args, value)
			counter++
		}
		i++
	}

	q += strings.Join(qParts, ",") + fmt.Sprintf("WHERE id = '%v'", id)
	r.logger.Trace(q)
	r.logger.Debug(qParts)
	commandTag, err := r.client.Exec(ctx, q, args...)
	if err != nil {
		return err
	}
	if commandTag.RowsAffected() != 1 {
		return errors.New("No row found to delete")
	}

	return tx.Commit(ctx)
}

func (r *repository) Delete(ctx context.Context, id string) error {
	tx, err := r.client.Begin(ctx)
	if err != nil {
		return err
	}
	q := `
		DELETE FROM workout WHERE id = $1;
	`
	r.logger.Trace(fmt.Sprintf("SQL Query: %s", utils.FormatQuery(q)))

	commandTag, err := r.client.Exec(ctx, q, id)
	if err != nil {
		return err
	}
	if commandTag.RowsAffected() != 1 {
		return errors.New("No row found to delete")
	}

	return tx.Commit(ctx)
}
