package workout

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/polyfit-live/polyfit/backend/internal/apperror"
	"github.com/polyfit-live/polyfit/backend/internal/config"
	"github.com/polyfit-live/polyfit/backend/internal/handlers"
	"github.com/polyfit-live/polyfit/backend/pkg/logging"

	"github.com/julienschmidt/httprouter"
)

const (
	workoutsURL = "/workout"
	workoutURL  = "/workout/:uuid"
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

func (h *handler) Register(router *httprouter.Router) {
	router.HandlerFunc(http.MethodPost, workoutsURL, apperror.Middleware(h.Create))
	router.HandlerFunc(http.MethodGet, workoutURL, apperror.Middleware(h.FindOne))
	router.HandlerFunc(http.MethodGet, workoutsURL, apperror.Middleware(h.FindAll))
	router.HandlerFunc(http.MethodPatch, workoutURL, apperror.Middleware(h.Update))
	router.HandlerFunc(http.MethodDelete, workoutURL, apperror.Middleware(h.Delete))
}

func (h *handler) Create(w http.ResponseWriter, r *http.Request) error {
	h.logger.Info("Create exercise")

	ex := Workout{}
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
	id = fmt.Sprintf("Location: http://%s:%s/workout/%s", cfg.Listen.BindIP, cfg.Listen.Port, id)
	bytes, err := json.Marshal(id)
	if err != nil {
		w.WriteHeader(404)
		return err
	}

	w.WriteHeader(201)
	w.Write(bytes)
	return nil
}

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

func (h *handler) FindAll(w http.ResponseWriter, r *http.Request) error {
	all, err := h.repository.FindAll(context.TODO())
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

func (h *handler) Update(w http.ResponseWriter, r *http.Request) error {
	id := httprouter.ParamsFromContext(r.Context()).ByName("uuid")
	h.logger.Info("Update exercise by ID: %s", id)

	ex := Workout{}
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
