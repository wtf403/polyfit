package workout

import (
	"github.com/polyfit-live/polyfit/backend/internal/exercise"
)

// Workout represents the workout model.
type Workout struct {
	ID          *string              `json:"id" example:"00000000-0000-0000-0000-000000000000"`
	Title       *string              `json:"title" example:"Круговая силовая тренировка"`
	Description *string              `json:"description" example:"Силовая тренировка в тренажерах или с отягощениями, направленная на укрепление скелетно-мышечной системы"`
	Type        *int                 `json:"type" example:"00000000-0000-0000-0000-000000000000"`
	Calories    *int                 `json:"calories" example:"432"`
	Media       *string              `json:"media" example:"http://polyfit.live/api/media/00000000"`
	Gender      *int                 `json:"gender" example:"00000000-0000-0000-0000-000000000000"`
	Exercises   *[]exercise.Exercise `json:"exercises"`
} //	@name	Workout
