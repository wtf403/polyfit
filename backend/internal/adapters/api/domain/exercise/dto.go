package exercise

type CreateExerciseDTO struct {
	Title       string `json:"title"   example:"Гиперэкстензия"`
	Description string `json:"surname" example:"Ноги упираются в платформу, сгибаемся до угла 90 градусов"`
} // @name CreateExerciseInput

type UpdateExerciseDTO struct {
	Title       string `json:"title"   example:"Новое упражнение"`
	Description string `json:"surname" example:"Новое описание"`
} // @name UpdateExerciseInput
