package user

import (
	"context"
	"polyfit/pkg/logging"
)

type Service struct {
	repository Repository
	logger     *logging.Logger
}

func NewService(repository Repository, logger *logging.Logger) *Service {
	return &Service{
		repository: repository,
		logger:     logger,
	}
}

func (s *Service) Create(ctx context.Context, dto CreateUserDTO) (u User, err error) {
	return
}
