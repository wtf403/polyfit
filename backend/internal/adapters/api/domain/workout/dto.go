package workout

type CreateWorkoutDTO struct {
	Title       string `json:"title"   example:"Круговая силовая тренировка"`
	Description string `json:"description" example:"Силовая тренировка в тренажерах или с отягощениями, направленная на укрепление скелетно-мышечной системы"`
} // @name CreateWorkoutInput

type UpdateWorkoutDTO struct {
	Title       string `json:"title"   example:"Новая тренировка"`
	Description string `json:"description" example:"Новое описание"`
} // @name UpdateWorkoutInput
