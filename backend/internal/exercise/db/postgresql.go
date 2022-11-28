package exercise

import (
	"context"
	"errors"
	"fmt"
	"reflect"
	"strings"

	"github.com/polyfit-live/polyfit/backend/internal/exercise"
	"github.com/polyfit-live/polyfit/backend/pkg/client/postgresql"
	"github.com/polyfit-live/polyfit/backend/pkg/logging"
	"github.com/polyfit-live/polyfit/backend/pkg/utils"

	"github.com/georgysavva/scany/pgxscan"
	"github.com/google/uuid"
)

// Check whether db implements exercise storage interface.
var _ exercise.Repository = &repository{}

type repository struct {
	client postgresql.Client
	logger *logging.Logger
}

func NewRepository(client postgresql.Client, logger *logging.Logger) exercise.Repository {
	return &repository{
		client: client,
		logger: logger,
	}
}

func (r *repository) Create(ctx context.Context, ex exercise.Exercise) (exID string, err error) {
	tx, err := r.client.Begin(ctx)
	if err != nil {
		return "", err
	}
	exID = uuid.New().String()
	ex.ID = &exID

	q := `INSERT INTO exercise (`
	qFields := make([]string, 0, 2)
	qValues := make([]string, 0, 2)
	args := make([]interface{}, 0, 2)

	v := reflect.ValueOf(ex)
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

	return exID, tx.Commit(ctx)
}

func (r *repository) FindOne(ctx context.Context, id string) (*exercise.Exercise, error) {
	tx, err := r.client.Begin(ctx)
	if err != nil {
		return nil, err
	}
	q := fmt.Sprintf("SELECT * FROM exercise WHERE id = '%s'", id)
	r.logger.Trace(fmt.Sprintf("SQL Query: %s", utils.FormatQuery(q)))
	rows, err := r.client.Query(ctx, q)
	if err != nil {
		return nil, err
	}

	ex := exercise.Exercise{}

	err = pgxscan.ScanOne(&ex, rows)
	if err != nil {
		return nil, err
	}
	return &ex, tx.Commit(ctx)
}

func (r *repository) FindAll(ctx context.Context) (ex *[]exercise.Exercise, err error) {
	tx, err := r.client.Begin(ctx)
	if err != nil {
		return nil, err
	}

	q := `
		SELECT * FROM exercise;
	`
	r.logger.Trace(fmt.Sprintf("SQL Query: %s", utils.FormatQuery(q)))

	rows, err := r.client.Query(ctx, q)
	if err != nil {
		return nil, err
	}

	exercises := make([]exercise.Exercise, 0)

	for rows.Next() {
		var ex exercise.Exercise

		err = pgxscan.ScanRow(&ex, rows)
		if err != nil {
			return nil, err
		}

		exercises = append(exercises, ex)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return &exercises, tx.Commit(ctx)
}

func (r *repository) Update(ctx context.Context, id string, ex exercise.Exercise) (err error) {
	tx, err := r.client.Begin(ctx)
	if err != nil {
		return err
	}
	q := `UPDATE exercise SET `
	qParts := make([]string, 0, 2)
	args := make([]interface{}, 0, 2)

	v := reflect.ValueOf(ex)
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

func (r *repository) Delete(ctx context.Context, id string) (err error) {
	tx, err := r.client.Begin(ctx)
	if err != nil {
		return err
	}
	q := `
		DELETE FROM exercise WHERE id = $1;
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
