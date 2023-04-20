package auth

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/go-chi/chi"
	"github.com/golang-jwt/jwt"
	"github.com/polyfit-live/polyfit/backend/internal/apperror"
	"github.com/polyfit-live/polyfit/backend/pkg/logging"
)

type Repository interface {
	Login(ctx context.Context, username string, password string) (*Claims, error)
	Register(ctx context.Context, user User) (ID string, err error)
}

const (
	loginURL    = "/api/login"
	registerURL = "/api/register"
)

type handler struct {
	repository Repository
	logger     *logging.Logger
}

func NewHandler(repository Repository, logger *logging.Logger) *handler {
	return &handler{
		repository: repository,
		logger:     logger,
	}
}
func (h *handler) Register(router chi.Router) {
	router.Post(loginURL, apperror.Middleware(h.Login))
	router.Post(registerURL, apperror.Middleware(h.Registration))
}

func (h *handler) Login(w http.ResponseWriter, r *http.Request) error {
	var user User
	json.NewDecoder(r.Body).Decode(&user)

	claims, err := h.repository.Login(r.Context(), *user.Username, *user.Password)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		return err
	}

	var jwtKey = []byte("polyfit")

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return nil
	}

	expirationTime := time.Now().Add(5 * time.Minute)
	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expirationTime,
	})

	return nil
}

func (h *handler) Registration(w http.ResponseWriter, r *http.Request) error {
	h.logger.Info("Register user")

	user := User{}
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		w.WriteHeader(400)
		return err
	}
	h.logger.Debug(user)

	if len(*user.Password) < 8 {
		w.WriteHeader(400)
		return errors.New("password must be at least 8 characters")
	}

	id, err := h.repository.Register(r.Context(), user)
	if err != nil {
		w.WriteHeader(400)
		return err
	}

	id = fmt.Sprintf("Location: %s", id)
	bytes, err := json.Marshal(id)
	if err != nil {
		w.WriteHeader(404)
		return err
	}

	w.WriteHeader(201)
	w.Write(bytes)
	return nil
}
