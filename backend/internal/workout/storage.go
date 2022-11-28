package workout

import (
	"context"
)

type Repository interface {
	Create(ctx context.Context, workout Workout) (string, error)
	FindOne(ctx context.Context, id string) (*Workout, error)
	FindAll(ctx context.Context) (*[]Workout, error)
	Update(ctx context.Context, id string, workout Workout) error
	Delete(ctx context.Context, id string) error
}
