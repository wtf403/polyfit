package workout

import (
	"context"
)

type Storage interface {
	Create(ctx context.Context, workout Workout) error
	FindAll(ctx context.Context) (w []Workout, err error)
	FindOne(ctx context.Context, id string) (Workout, error)
	Update(ctx context.Context, workout Workout) error
	Delete(ctx context.Context, id string) error
}
