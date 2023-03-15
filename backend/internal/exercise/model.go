package exercise

// Exercise represents the exercise model.
type Exercise struct {
	ID        *string  `json:"id" example:"00000000-0000-0000-0000-000000000000"`
	Title     *string  `json:"title" example:"Гиперэкстензия"`
	Hardness  *float32 `json:"hardness" example:"1.5"`
	Amount    *int     `json:"amount" example:"20"`
	Media     *string  `json:"media" example:"http://polyfit.live/api/media/00000000"`
	ShowTimer *bool    `json:"show_timer" example:"true"`
	Calories  *int     `json:"calories" example:"168"`
	Equipment *string  `json:"equipment" example:"00000000-0000-0000-0000-000000000000"`
	Gender    *string  `json:"gender" example:"00000000-0000-0000-0000-000000000000"`
} //	@name	Exercise
