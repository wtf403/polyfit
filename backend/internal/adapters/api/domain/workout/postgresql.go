package workout

import (
	"context"
	"errors"
	"fmt"
	"github.com/jackc/pgx/v4"
	"polyfit/internal/apperror"
	"polyfit/pkg/logging"
	"time"
)

const (
	tableName = "workouts"
)

// Check whether db implements workout storage interface.
var _ Storage = &db{}

// db implements workout storage interface.
type db struct {
	logger         *logging.Logger
	conn           *pgx.Conn
	requestTimeout time.Duration
}

// NewStorage returns a new workout storage instance.
func NewStorage(storage *pgx.Conn, requestTimeout int) Storage {
	return &db{
		logger:         logging.GetLogger(),
		conn:           storage,
		requestTimeout: time.Duration(requestTimeout) * time.Second,
	}
}

// Create inserts a workout record in the database.
// Returns an error on failure or inserted workout with its id on success.

func (d *db) Create(workout *Workout) (*Workout, error) {
	query := fmt.Sprintf(`
	INSERT INTO %s (workout)
	VALUES ($1)
	RETURNING id`, tableName)

	ctx, cancel := context.WithTimeout(context.Background(), d.requestTimeout)
	defer cancel()

	err := d.conn.QueryRow(
		ctx,
		query,
		workout.Workout,
	).Scan(&workout.Id)

	if err != nil {
		err = fmt.Errorf("failed to execute create workout query: %v", err)
		d.logger.Error(err)
		return nil, err
	}

	return workout, nil
}

func (d *db) FindById(id int16) (*Workout, error) {
	query := fmt.Sprintf(`
	SELECT id, workout
	FROM %s 
	WHERE id = $1`, tableName)

	var found Workout

	ctx, cancel := context.WithTimeout(context.Background(), d.requestTimeout)
	defer cancel()

	err := d.conn.QueryRow(ctx, query, id).Scan(
		&found.Id,
		&found.Workout,
	)

	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, apperror.ErrNoRows
		}
		err = fmt.Errorf("failed to execute find workout by id query: %v", err)
		d.logger.Error(err)
		return nil, err
	}

	return &found, nil
}

func (d *db) Update(workout *UpdateWorkoutDTO) error {
	query := fmt.Sprintf(`
	UPDATE %s
	SET workout = $1
	WHERE id = $2`, tableName)

	args := []interface{}{
		workout.Workout,
		workout.Id,
	}

	ctx, cancel := context.WithTimeout(context.Background(), d.requestTimeout)
	defer cancel()

	result, err := d.conn.Exec(ctx, query, args...)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return apperror.ErrNoRows
		}
		err = fmt.Errorf("failed to execute update workout query: %v", err)
		d.logger.Error(err)
		return err
	}

	if result.RowsAffected() == 0 {
		return apperror.ErrNoRows
	}

	return nil
}

func (d *db) Delete(id int16) error {
	query := fmt.Sprintf("DELETE FROM %s WHERE id = $1", tableName)

	ctx, cancel := context.WithTimeout(context.Background(), d.requestTimeout)
	defer cancel()

	_, err := d.conn.Exec(ctx, query, id)
	if err != nil {
		return fmt.Errorf("failed to delete workout: %v", err)
	}

	return nil
}
