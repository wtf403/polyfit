package exercise

import (
	"github.com/jackc/pgx/pgtype"
	"time"
)

// Exercise represents the exercise model.
type Exercise struct {
	Id          int64          `json:"id" example:"1"`
	Title       string         `json:"title" example:"Гиперэкстензия"`
	Description string         `json:"surname" example:"Ноги упираются в платформу, сгибаемся до угла 90 градусов"`
	Amount      int64          `json:"amount" example:"20"`
	ShowTimer   time.Timer     `json:"show_timer" example:"01:00"`
	Equipment   int64          `json:"equipment" example:"0001"`
	Calories    int64          `json:"calories" example:"432"`
	Media       pgtype.Varchar `json:"media" example:"http://"`
} // @name Exercise
