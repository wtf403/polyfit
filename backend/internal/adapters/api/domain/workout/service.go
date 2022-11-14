package workout

import (
	"context"
	"errors"
	"polyfit/internal/apperror"
	"polyfit/pkg/logging"
)

type Service struct {
	storage Storage
	logger  *logging.Logger
}

func NewService(storage Storage, logger *logging.Logger) *Service {
	return &Service{
		storage: storage,
		logger:  logger,
	}
}

func (s *Service) Create(ctx context.Context, input *CreateWorkoutDTO) (*Workout, error) {
	w := Workout{
		Workout: input.Workout,
	}

	workout, err := s.storage.Create(&w)
	if err != nil {
		return nil, err
	}

	return workout, nil
}

func (s *Service) GetById(ctx context.Context, id int16) (*Workout, error) {
	workout, err := s.storage.FindById(id)
	if err != nil {
		if errors.Is(err, apperror.ErrNoRows) {
			return nil, err
		}
		s.logger.Warnf("cannot find workout by id: %v", err)
		return nil, err
	}

	return workout, nil
}

func (s *Service) Update(ctx context.Context, workout *UpdateWorkoutDTO) error {
	a, err := s.GetById(ctx, workout.Id)
	if err != nil {
		if !errors.Is(err, apperror.ErrNoRows) {
			s.logger.Errorf("failed to get workout: %v", err)
		}
		return err
	}

	if a == nil {
		return apperror.ErrNoRows
	}

	err = s.storage.Update(workout)
	if err != nil {
		s.logger.Errorf("failed to update workout: %v", err)
		return err
	}

	return nil
}

func (s *Service) Delete(ctx context.Context, id int16) error {
	err := s.storage.Delete(id)
	if err != nil {
		if !errors.Is(err, apperror.ErrNoRows) {
			s.logger.Warnf("failed to delete workout: %v", err)
		}
		return err
	}

	return nil
}
