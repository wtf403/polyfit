package exercise

import (
	"context"
	"polyfit/pkg/logging"
)

type Service struct {
	repository Repository
	logger     *logging.Logger
}

func (s *Service) Create(ctx context.Context, dto CreateExerciseDTO) (u Exercise, err error) {
	return
}
