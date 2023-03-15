package exercise

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/polyfit-live/polyfit/backend/internal/apperror"
	"github.com/polyfit-live/polyfit/backend/internal/config"
	"github.com/polyfit-live/polyfit/backend/internal/handlers"
	"github.com/polyfit-live/polyfit/backend/pkg/logging"

	"github.com/julienschmidt/httprouter"
)

const (
	exercisesURL = "/api/exercise"
	exerciseURL  = "/api/exercise/:uuid"
)

type handler struct {
	logger     *logging.Logger
	repository Repository
}

func NewHandler(repository Repository, logger *logging.Logger) handlers.Handler {
	return &handler{
		repository: repository,
		logger:     logger,
	}
}

func (h *handler) Register(router chi.Router) {
	router.Post(exercisesURL, apperror.Middleware(h.Create))
	router.Get(exerciseURL, apperror.Middleware(h.FindOne))
	router.Get(exercisesURL, apperror.Middleware(h.FindAll))
	router.Patch(exerciseURL, apperror.Middleware(h.Update))
	router.Delete(exerciseURL, apperror.Middleware(h.Delete))
}

// @Summary	Create an exercise
// @Accept		json
// @Produce	json
// @Param		body	body		Exercise	true	"Create an Exercise"
// @Success	201		{string}	string		"Returns the Location of the newly created Exercise"
// @Failure	400		{string}	string		"Invalid input"
// @Router		/exercises [post]
func (h *handler) Create(w http.ResponseWriter, r *http.Request) error {
	h.logger.Info("Create exercise")

	ex := Exercise{}
	if err := json.NewDecoder(r.Body).Decode(&ex); err != nil {
		w.WriteHeader(400)
		return err
	}
	h.logger.Debug(ex)
	id, err := h.repository.Create(r.Context(), ex)
	if err != nil {
		w.WriteHeader(400)
		return err
	}
	cfg := config.GetConfig()
	id = fmt.Sprintf("Location: http://%s:%s/exercise/%s", cfg.Listen.BindIP, cfg.Listen.Port, id)
	bytes, err := json.Marshal(id)
	if err != nil {
		w.WriteHeader(404)
		return err
	}

	w.WriteHeader(201)
	w.Write(bytes)
	return nil
}

// @Summary	Retrieve an exercise by uuid
// @Accept		json
// @Produce	json
// @Param		uuid	path		string		true	"UUID of exercise to retrieve"
// @Success	200		{object}	Exercise	"Returns the requested exercise"
// @Failure	400		{string}	string		"Error getting exercise"
// @Failure	404		{string}	string		"Exercise not found"
// @Router		/exercises/{uuid} [get]
func (h *handler) FindOne(w http.ResponseWriter, r *http.Request) error {
	id := httprouter.ParamsFromContext(r.Context()).ByName("uuid")
	h.logger.Info("Find exercise by ID, %s", id)

	ex, err := h.repository.FindOne(context.TODO(), id)
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

// @Summary	Retrieve all exercises
// @Accept		json
// @Produce	json
// @Success	200	{array}		Exercise	"Returns all exercises"
// @Failure	400	{string}	string		"Error getting exercises"
// @Router		/exercises [get]
func (h *handler) FindAll(w http.ResponseWriter, r *http.Request) error {
	h.logger.Info("Find all exercises")

	all, err := h.repository.FindAll(context.TODO())
	if err != nil {
		w.WriteHeader(400)
		return err
	}

	bytes, err := json.Marshal(all)
	if err != nil {
		w.WriteHeader(400)
		return err
	}

	w.WriteHeader(http.StatusOK)
	w.Write(bytes)
	return nil
}

// @Summary	Update an exercise
// @Accept		json
// @Produce	json
// @Param		body	body		Exercise	true	"Update an exercise"
// @Param		uuid	path		string		true	"UUID of exercise to update"
// @Success	204		{string}	string		"Returns no content"
// @Failure	400		{string}	string		"Error updating exercise"
// @Router		/exercises/{uuid} [put]
func (h *handler) Update(w http.ResponseWriter, r *http.Request) error {
	id := httprouter.ParamsFromContext(r.Context()).ByName("uuid")
	h.logger.Info("Update exercise by ID: %s", id)

	ex := Exercise{}
	if err := json.NewDecoder(r.Body).Decode(&ex); err != nil {
		w.WriteHeader(400)
		return err
	}
	h.logger.Debug(ex)
	err := h.repository.Update(r.Context(), id, ex)
	if err != nil {
		w.WriteHeader(400)
		return err
	}

	w.WriteHeader(204)
	return nil
}

// @Summary	Delete an exercise
// @Accept		json
// @Produce	json
// @Param		uuid	path		string	true	"UUID of exercise to delete"
// @Success	204		{string}	string	"Returns no content"
// @Failure	404		{string}	string	"Error deleting exercise"
// @Router		/exercises/{uuid} [delete]
func (h *handler) Delete(w http.ResponseWriter, r *http.Request) error {
	id := httprouter.ParamsFromContext(r.Context()).ByName("uuid")
	h.logger.Info("Delete exercise ID: %s", id)

	err := h.repository.Delete(context.TODO(), id)
	if err != nil {
		w.WriteHeader(404)
		return err
	}

	w.WriteHeader(204)
	return nil
}
