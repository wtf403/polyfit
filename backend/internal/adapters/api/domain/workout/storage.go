package workout

type Storage interface {
	Create(workout *Workout) (*Workout, error)
	FindById(id int16) (*Workout, error)
	Update(workout *UpdateWorkoutDTO) error
	Delete(id int16) error
}
