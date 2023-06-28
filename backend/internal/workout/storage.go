package workout

import (
	"context"

	"github.com/polyfit-live/polyfit/backend/pkg/client/postgresql"
	"github.com/polyfit-live/polyfit/backend/pkg/logging"
)

// Check whether db implements workout storage interface.
var _ Storage = &storage{}

type storage struct {
	client     postgresql.Client
	repository Repository
	logger     *logging.Logger
}

type Storage interface {
	Create(ctx context.Context, wk Workout) (exId string, err error)
	FindOne(ctx context.Context, id string) (*Workout, error)
	FindAll(ctx context.Context) (*[]Workout, error)
	Update(ctx context.Context, id string, workout Workout) error
	Delete(ctx context.Context, id string) error
}

func NewStorage(repository Repository, logger *logging.Logger) Storage {
	return &storage{
		repository: repository,
		logger:     logger,
	}
}

func (s *storage) Create(ctx context.Context, wk Workout) (exID string, err error) {

	exID, err = s.repository.Create(ctx, wk)
	return exID, err
}

func (s *storage) FindOne(ctx context.Context, id string) (ex *Workout, err error) {

	ex, err = s.repository.FindOne(ctx, id)
	return ex, err
}

func (s *storage) FindAll(ctx context.Context) (ex *[]Workout, err error) {

	ex, err = s.repository.FindAll(ctx)
	return ex, err
}

func (s *storage) Update(ctx context.Context, id string, ex Workout) (err error) {

	err = s.repository.Update(ctx, id, ex)
	if err != nil {
		return err
	}
	return nil
}

func (s *storage) Delete(ctx context.Context, id string) (err error) {

	err = s.repository.Delete(ctx, id)
	if err != nil {
		return err
	}
	return nil
}
