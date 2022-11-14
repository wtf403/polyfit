package workout

import (
	"errors"
	"fmt"
	"github.com/julienschmidt/httprouter"
	"net/http"
	"polyfit/internal/apperror"
	"polyfit/internal/handlers"
	response "polyfit/internal/responce"
	"polyfit/pkg/logging"
)

const (
	workoutsURL = "/api/workouts"
	workoutURL  = "/api/workouts/:id"
)

// Handler handles requests specified to workout service.
type Handler struct {
	logger         *logging.Logger
	workoutService Service
}

// NewHandler returns a new workout Handler instance.
func NewHandler(workoutService Service, logger *logging.Logger) handlers.Handler {
	return &Handler{
		workoutService: workoutService,
		logger:         logger,
	}

}

// Register registers new routes for router.
func (h *Handler) Register(router *httprouter.Router) {
	router.HandlerFunc(http.MethodGet, workoutsURL, h.GetWorkout)
	router.HandlerFunc(http.MethodPost, workoutURL, h.CreateWorkout)
	router.HandlerFunc(http.MethodPut, workoutURL, h.UpdateWorkout)
	router.HandlerFunc(http.MethodDelete, workoutURL, h.DeleteWorkout)
}

// GetWorkout godoc
// @Summary Show workout information
// @Description Get workout by id.
// @Tags workouts
// @Accept json
// @Produce json
// @Param id path int64 true "Workout id"
// @Success 200 {object} Workout
// @Failure 404 {object} error.AppError
// @Failure 500 {object} error.AppError
// @Router /workouts/{id} [get]

func (h *Handler) GetWorkout(w http.ResponseWriter, r *http.Request) {
	h.logger.Info("GET_WORKOUT")

	id, err := handlers.ReadIdParam16(r)
	if err != nil {
		response.BadRequest(w, err.Error(), "")
		return
	}

	workout, err := h.workoutService.GetById(r.Context(), id)
	if err != nil {
		if errors.Is(err, apperror.ErrNoRows) {
			response.NotFound(w)
			return
		}
		h.logger.Error(err)
		response.InternalError(w, err.Error(), "")
		return
	}

	response.JSON(w, http.StatusOK, workout)
}

// CreateWorkout godoc
// @Summary Create workout
// @Description Insert workout in database.
// @Tags workouts
// @Accept json
// @Produce json
// @Param input body CreateWorkoutDTO true "JSON input"
// @Success 201 {object} Workout
// @Failure 400 {object} error.AppError
// @Failure 500 {object} error.AppError
// @Router /workouts [post]

func (h *Handler) CreateWorkout(w http.ResponseWriter, r *http.Request) {
	h.logger.Info("CREATE_WORKOUT")

	var input CreateWorkoutDTO
	if err := response.ReadJSON(w, r, &input); err != nil {
		response.BadRequest(w, err.Error(), apperror.ErrInvalidRequestBody.Error())
		return
	}

	workout, err := h.workoutService.Create(r.Context(), &input)
	if err != nil {
		if errors.Is(err, apperror.ErrEmailTaken) {
			response.BadRequest(w, err.Error(), "")
			return
		}
		response.InternalError(w, fmt.Sprintf("cannot create workout: %v", err), "")
		return
	}

	response.JSON(w, http.StatusCreated, workout)
}

// UpdateWorkout godoc
// @Summary Update workout
// @Description Update workout with specified id.
// @Tags workouts
// @Accept json
// @Produce json
// @Param id path int64 true "Workout id"
// @Param input body UpdateWorkoutDTO true "JSON input"
// @Success 200
// @Failure 400 {object} error.AppError
// @Failure 404 {object} error.AppError
// @Failure 500 {object} error.AppError
// @Router /workouts/{id} [put]

func (h *Handler) UpdateWorkout(w http.ResponseWriter, r *http.Request) {
	h.logger.Info("UPDATE_WORKOUT")

	id, err := handlers.ReadIdParam16(r)
	if err != nil {
		response.BadRequest(w, err.Error(), "")
		return
	}

	var input UpdateWorkoutDTO
	if err := response.ReadJSON(w, r, &input); err != nil {
		response.BadRequest(w, err.Error(), "please, fix your request body")
		return
	}

	if err := input.Validate(); err != nil {
		response.BadRequest(w, err.Error(), "")
		return
	}
	input.Id = id

	err = h.workoutService.Update(r.Context(), &input)
	if err != nil {
		switch err {
		case apperror.ErrNoRows:
			response.NotFound(w)
		case apperror.ErrWrongPassword:
			response.BadRequest(w, err.Error(), "")
		default:
			response.InternalError(w, err.Error(), "")
		}
		return
	}

	w.WriteHeader(http.StatusOK)
}

// DeleteWorkout godoc
// @Summary Delete workout
// @Description Delete workout with specified id.
// @Tags workouts
// @Accept json
// @Produce json
// @Param id path int64 true "Workout id"
// @Success 200
// @Failure 404 {object} error.AppError
// @Failure 500 {object} error.AppError
// @Router /workouts/{id} [delete]

func (h *Handler) DeleteWorkout(w http.ResponseWriter, r *http.Request) {
	h.logger.Info("DELETE_WORKOUT")

	id, err := handlers.ReadIdParam16(r)
	if err != nil {
		response.BadRequest(w, err.Error(), "")
		return
	}

	err = h.workoutService.Delete(r.Context(), id)
	if err != nil {
		if errors.Is(err, apperror.ErrNoRows) {
			response.NotFound(w)
			return
		}
		response.InternalError(w, err.Error(), "something went wrong on the server side")
		return
	}

	w.WriteHeader(http.StatusOK)
}
