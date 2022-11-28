package exercise

import (
	"context"
)

type Repository interface {
	Create(ctx context.Context, exercise Exercise) (string, error)
	FindOne(ctx context.Context, id string) (*Exercise, error)
	FindAll(ctx context.Context) (*[]Exercise, error)
	Update(ctx context.Context, id string, exercise Exercise) error
	Delete(ctx context.Context, id string) error
}
