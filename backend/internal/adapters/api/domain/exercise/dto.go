package exercise

type CreateExerciseDTO struct {
	Title       string `json:"title"   example:"Гиперэкстензия"`
	Description string `json:"description" example:"Ноги упираются в платформу, сгибаемся до угла 90 градусов"`
} // @name CreateExerciseInput

type UpdateExerciseDTO struct {
	Title       string `json:"title"   example:"Новое упражнение"`
	Description string `json:"description" example:"Новое описание"`
} // @name UpdateExerciseInput
