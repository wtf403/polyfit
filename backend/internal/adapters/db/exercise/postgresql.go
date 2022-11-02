package exercise

import (
	"context"
	"fmt"
	"github.com/jackc/pgconn"
	"github.com/pkg/errors"
	"polyfit/internal/adapters/api/domain/exercise"
	"polyfit/pkg/client/postgresql"
	"polyfit/pkg/logging"
	"strings"
)

type repository struct {
	client postgresql.Client
	logger *logging.Logger
}

func formatQuery(q string) string {
	return strings.ReplaceAll(strings.ReplaceAll(q, "\t", ""), "\n", "")
}

func (r repository) Create(ctx context.Context, exercise *exercise.Exercise) error {
	q := `INSERT INTO author 
    	(name)
	VALUES 
	    ($1, $2, $3, $4, $5, $6, $7, $8)
	RETURNING id , 
	`
	r.logger.Trace(fmt.Sprintf("SQL Query: %s", formatQuery(q)))
	queryRow := r.client.QueryRow(ctx, q, exercise.Id, exercise.Title, exercise.Description, exercise.Amount, exercise.ShowTimer, exercise.Equipment,
		exercise.Calories, exercise.Media)
	if err := queryRow.Scan(&exercise.Id, &exercise.Title, &exercise.Description, &exercise.Amount, &exercise.ShowTimer, &exercise.Equipment,
		&exercise.Calories, &exercise.Media); err != nil {
		var pgErr *pgconn.PgError
		if errors.Is(err, pgErr) {
			pgErr = err.(*pgconn.PgError)
			newErr := fmt.Errorf(fmt.Sprintf("SQL Error: %s, Details: %s, Where: %s, Code: %s, SQLState: %s", pgErr.Message, pgErr.Detail, pgErr.Where, pgErr.Code, pgErr.SQLState()))
			r.logger.Error(newErr)
			return newErr
		}
		return err
	}
	return nil
}

func (r repository) FindAll(ctx context.Context) (u []exercise.Exercise, err error) {
	q := `
	SELECT * FROM exercise
	`

	query, err := r.client.Query(ctx, q)
	if err != nil {
		return nil, err
	}

	exercise := make([]exercise.Exercise, 0)

	for rows.Next {
		var ath exercise.Exercise

		rows.Scan()
	}
}

func (r repository) FindOne(ctx context.Context, id string) (exercise.Exercise, error) {
	//TODO implement me
	panic("implement me")
}

func (r repository) Update(ctx context.Context, exercise exercise.Exercise) error {
	//TODO implement me
	panic("implement me")
}

func (r repository) Delete(ctx context.Context, id string) error {
	//TODO implement me
	panic("implement me")
}

func NewRepository(client postgresql.Client, logger *logging.Logger) exercise.Repository {
	return &repository{
		client: client,
		logger: logger,
	}
}
