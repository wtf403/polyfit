package exercise

import (
	"context"

	"github.com/polyfit-live/polyfit/backend/pkg/client/postgresql"
	"github.com/polyfit-live/polyfit/backend/pkg/logging"
)

var _ Storage = &storage{}

type storage struct {
	client     postgresql.Client
	repository Repository
	logger     *logging.Logger
}

type Storage interface {
	Create(ctx context.Context, exercise Exercise) (exId string, err error)
	FindOne(ctx context.Context, id string) (*Exercise, error)
	FindAll(ctx context.Context) (*[]Exercise, error)
	Update(ctx context.Context, id string, exercise Exercise) error
	Delete(ctx context.Context, id string) error
}

func NewStorage(repository Repository, logger *logging.Logger) Storage {
	return &storage{
		repository: repository,
		logger:     logger,
	}
}

func (s *storage) Create(ctx context.Context, ex Exercise) (exID string, err error) {

	exID, err = s.repository.Create(ctx, ex)
	return exID, err
}

func (s *storage) FindOne(ctx context.Context, id string) (ex *Exercise, err error) {

	ex, err = s.repository.FindOne(ctx, id)
	return ex, err
}

func (s *storage) FindAll(ctx context.Context) (ex *[]Exercise, err error) {

	ex, err = s.repository.FindAll(ctx)
	return ex, err
}

func (s *storage) Update(ctx context.Context, id string, ex Exercise) (err error) {

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
