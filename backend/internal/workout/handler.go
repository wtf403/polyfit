package workout

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/polyfit-live/polyfit/backend/internal/apperror"
	"github.com/polyfit-live/polyfit/backend/pkg/logging"

	"github.com/julienschmidt/httprouter"
)

var _ Handler = &handler{}

const (
	workoutsURL = "/api/workout"
	workoutURL  = "/api/workout/:uuid"
)

type handler struct {
	storage Storage
	logger  *logging.Logger
}

func NewHandler(storage Storage, logger *logging.Logger) Handler {
	return &handler{
		storage: storage,
		logger:  logger,
	}
}

type Handler interface {
	Register(router chi.Router)
}

func (h *handler) Register(router chi.Router) {
	router.Post(workoutsURL, apperror.Middleware(h.Create))
	router.Get(workoutURL, apperror.Middleware(h.FindOne))
	router.Get(workoutsURL, apperror.Middleware(h.FindAll))
	router.Patch(workoutURL, apperror.Middleware(h.Update))
	router.Delete(workoutURL, apperror.Middleware(h.Delete))
}

// @Summary	Create a new workout
// @Accept		json
// @Produce	json
// @Param		body	body	Workout	true	"Workout to be created"
// @Success	201		"Created"
// @Failure	400		{object}	error
// @Force		202
// @Router		/api/workouts [post]
func (h *handler) Create(w http.ResponseWriter, r *http.Request) error {
	h.logger.Info("Create exercise")

	ex := Workout{}
	if err := json.NewDecoder(r.Body).Decode(&ex); err != nil {
		w.WriteHeader(400)
		return err
	}
	h.logger.Debug(ex)
	id, err := h.storage.Create(r.Context(), ex)
	if err != nil {
		w.WriteHeader(400)
		return err
	}
	id = fmt.Sprintf("Location: http://polyfit.live/api/workout/%s", id)
	bytes, err := json.Marshal(id)
	if err != nil {
		w.WriteHeader(404)
		return err
	}

	w.WriteHeader(201)
	w.Write(bytes)
	return nil
}

// @Summary	Returns the specified workout
// @Accept		json
// @Produce	json
// @Param		uuid	path	string	true	"UUID of the workout you want to fetch"
// @Success	200		"OK"
// @Failure	400		{object}	error
// @Force		202
// @Resource	/workouts{uuid}
// @Router		/workouts/{uuid} [get]
func (h *handler) FindOne(w http.ResponseWriter, r *http.Request) error {
	id := httprouter.ParamsFromContext(r.Context()).ByName("uuid")
	h.logger.Info("Find exercise by ID, %s", id)

	ex, err := h.storage.FindOne(context.TODO(), id)
	if err != nil {
		h.logger.Error(err)
		w.WriteHeader(400)
	}

	bytes, err := json.Marshal(ex)
	if err != nil {
		w.WriteHeader(404)
		return err
	}

	w.WriteHeader(http.StatusOK)
	w.Write(bytes)
	return nil
}

// @Summary	Returns all stored workouts
// @Accept		json
// @Produce	json
// @Success	200	"OK"
// @Failure	400	{object}	error
// @Force		202
// @Resource	/workouts
// @Router		/workouts [get]
func (h *handler) FindAll(w http.ResponseWriter, r *http.Request) error {
	all, err := h.storage.FindAll(context.TODO())
	if err != nil {
		w.WriteHeader(400)
		return err
	}

	allBytes, err := json.Marshal(all)
	if err != nil {
		return err
	}

	w.WriteHeader(http.StatusOK)
	w.Write(allBytes)

	return nil
}

// @Summary	Updates the specified workout
// @Accept		json
// @Produce	json
// @Param		body	body	Workout	true	"Exercise to be updated"
// @Param		uuid	path	string					true	"UUID of the workout you want to update"
// @Success	204		"OK"
// @Failure	400		{object}	error
// @Force		202
// @Resource	/workouts{uuid}
// @Router		/workouts/{uuid} [patch]
func (h *handler) Update(w http.ResponseWriter, r *http.Request) error {
	id := httprouter.ParamsFromContext(r.Context()).ByName("uuid")
	h.logger.Info("Update exercise by ID: %s", id)

	ex := Workout{}
	if err := json.NewDecoder(r.Body).Decode(&ex); err != nil {
		w.WriteHeader(400)
		return err
	}
	h.logger.Debug(ex)
	err := h.storage.Update(r.Context(), id, ex)
	if err != nil {
		w.WriteHeader(400)
		return err
	}

	w.WriteHeader(204)
	return nil
}

// @Summary	Deletes the specified workout
// @Accept		json
// @Produce	json
// @Param		uuid	path	string	true	"UUID of the workout you want to delete"
// @Success	204		"OK"
// @Failure	400		{object}	error
// @Force		202
// @Resource	/workouts{uuid}
// @Router		/workouts/{uuid} [delete]
func (h *handler) Delete(w http.ResponseWriter, r *http.Request) error {
	id := httprouter.ParamsFromContext(r.Context()).ByName("uuid")
	h.logger.Info("Delete exercise ID: %s", id)

	err := h.storage.Delete(context.TODO(), id)
	if err != nil {
		w.WriteHeader(404)
		return err
	}

	w.WriteHeader(204)
	return nil
}
