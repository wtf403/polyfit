package workout

import "github.com/jackc/pgx/pgtype"

// Workout represents the workout model.
type Workout struct {
	Id          int64          `json:"id" example:"1"`
	Title       string         `json:"title" example:"Круговая силовая тренировка"`
	Description string         `json:"surname" example:"Силовая тренировка в тренажерах или с отягощениями, направленная на укрепление скелетно-мышечной системы"`
	Date        pgtype.Date    `json:"date" example:"2022-10-16"`
	UserId      string         `json:"user_id" example:"001"`
	Type        int64          `json:"type" example:"1"`
	Calories    int64          `json:"calories" example:"432"`
	Media       pgtype.Varchar `json:"media" example:"http://"`
} // @name Workout
