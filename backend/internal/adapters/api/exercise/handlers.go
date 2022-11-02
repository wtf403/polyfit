package exercise

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
	"polyfit/pkg/logging"
)

const (
	usersURL = "/exercise"
	userURL  = "/exercise/:uuid"
)

type handler struct {
	logger *logging.Logger
}

func NewHandler(logger *logging.Logger) handlers.Handler {
	return &handler{
		logger: logger,
	}

}
func (h *handler) Register(router *httprouter.Router) {
	router.HandlerFunc(http.MethodGet, usersURL, apperoor.Middleware(h.GetList))
	router.HandlerFunc(http.MethodPost, userURL, apperoor.Middleware(h.CreateUser))
	router.HandlerFunc(http.MethodGet, userURL, apperoor.Middleware(h.GetUserByUUID))
	router.HandlerFunc(http.MethodPut, userURL, apperoor.Middleware(h.UpdateUser))
	router.HandlerFunc(http.MethodPatch, userURL, apperoor.Middleware(h.PartiallyUpdateUser))
	router.HandlerFunc(http.MethodDelete, userURL, apperoor.Middleware(h.DeleteUser))
}

func (h *handler) GetList(w http.ResponseWriter, r *http.Request) error {
	w.WriteHeader(200)
	w.Write([]byte(""))

	return nil
}
func (h *handler) CreateUser(w http.ResponseWriter, r *http.Request) error {
	w.WriteHeader(201)
	w.Write([]byte(""))

	return nil
}
func (h *handler) GetUserByUUID(w http.ResponseWriter, r *http.Request) error {
	w.WriteHeader(200)
	w.Write([]byte(""))

	return nil
}
func (h *handler) UpdateUser(w http.ResponseWriter, r *http.Request) error {
	w.WriteHeader(204)
	w.Write([]byte(""))

	return nil
}
func (h *handler) PartiallyUpdateUser(w http.ResponseWriter, r *http.Request) error {
	w.WriteHeader(204)
	w.Write([]byte(""))

	return nil
}
func (h *handler) DeleteUser(w http.ResponseWriter, r *http.Request) error {
	w.WriteHeader(204)
	w.Write([]byte(""))

	return nil
}
