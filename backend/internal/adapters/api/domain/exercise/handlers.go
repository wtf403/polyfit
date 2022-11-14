package exercise

import (
	"encoding/json"
	"github.com/julienschmidt/httprouter"
	"net/http"
	"polyfit/internal/apperror"
	"polyfit/internal/handlers"
	"polyfit/pkg/logging"
)

const (
	exercisesURL = "/exercise"
	exerciseURL  = "/exercise/:uuid"
)

type handler struct {
	logger  *logging.Logger
	service *Service
}

func NewHandler(service *Service, logger *logging.Logger) handlers.Handler {
	return &handler{
		service: service,
		logger:  logger,
	}

}
func (h *handler) Register(router *httprouter.Router) {
	router.HandlerFunc(http.MethodGet, exercisesURL, apperror.Middleware(h.GetList))
	router.HandlerFunc(http.MethodPost, exerciseURL, apperror.Middleware(h.CreateExercise))
	router.HandlerFunc(http.MethodGet, exerciseURL, apperror.Middleware(h.GetExerciseByUUID))
	router.HandlerFunc(http.MethodPut, exerciseURL, apperror.Middleware(h.UpdateExercise))
	router.HandlerFunc(http.MethodPatch, exerciseURL, apperror.Middleware(h.PartiallyUpdateExercise))
	router.HandlerFunc(http.MethodDelete, exerciseURL, apperror.Middleware(h.DeleteExercise))
}

func (h *handler) GetList(w http.ResponseWriter, r *http.Request) error {
	all, err := h.service.GetAll(r.Context())
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
func (h *handler) CreateExercise(w http.ResponseWriter, r *http.Request) error {
	w.WriteHeader(201)
	w.Write([]byte(""))

	return nil
}
func (h *handler) GetExerciseByUUID(w http.ResponseWriter, r *http.Request) error {
	w.WriteHeader(200)
	w.Write([]byte(""))

	return nil
}
func (h *handler) UpdateExercise(w http.ResponseWriter, r *http.Request) error {
	w.WriteHeader(204)
	w.Write([]byte(""))

	return nil
}
func (h *handler) PartiallyUpdateExercise(w http.ResponseWriter, r *http.Request) error {
	w.WriteHeader(204)
	w.Write([]byte(""))

	return nil
}
func (h *handler) DeleteExercise(w http.ResponseWriter, r *http.Request) error {
	w.WriteHeader(204)
	w.Write([]byte(""))

	return nil
}
