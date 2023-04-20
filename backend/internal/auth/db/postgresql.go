package auth

import (
	"context"
	"errors"
	"fmt"
	"reflect"
	"strings"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/polyfit-live/polyfit/backend/internal/auth"
	"github.com/polyfit-live/polyfit/backend/pkg/client/postgresql"
	"github.com/polyfit-live/polyfit/backend/pkg/logging"
	"golang.org/x/crypto/bcrypt"
)

// Check whether db implements auth storage interface.
var _ auth.Repository = &repository{}

type repository struct {
	client postgresql.Client
	logger *logging.Logger
}

func NewRepository(client postgresql.Client, logger *logging.Logger) auth.Repository {
	return &repository{
		client: client,
		logger: logger,
	}
}

func (r *repository) Login(ctx context.Context, username string, password string) (*auth.Claims, error) {
	var storedPassword []byte

	err := r.client.QueryRow(ctx, `SELECT password FROM users WHERE username = $1`, username).Scan(&storedPassword)
	if err != nil {
		return nil, err
	}

	if err = bcrypt.CompareHashAndPassword(storedPassword, []byte(password)); err != nil {
		return nil, err
	}

	expirationTime := time.Now().Add(5 * time.Minute)
	claims := &auth.Claims{
		Username: username,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	return claims, nil
}

func (r *repository) Register(ctx context.Context, user auth.User) (ID string, err error) {
	tx, err := r.client.Begin(ctx)
	if err != nil {
		return "", err
	}

	q := `INSERT INTO users (`
	qFields := make([]string, 0, 2)
	qValues := make([]string, 0, 2)
	args := make([]interface{}, 0, 2)

	v := reflect.ValueOf(user.Username)
	i, counter := 0, 1
	for i < v.NumField() {
		field := v.Type().Field(i).Tag.Get("json")
		value := v.Field(i).Interface()
		if !v.Field(i).IsNil() {
			qFields = append(qFields, field)
			qValues = append(qValues, fmt.Sprintf(`$%v`, counter))
			args = append(args, value)
			counter++
		}
		i++
	}
	q += strings.Join(qFields, ", ") + ") VALUES (" + strings.Join(qValues, ", ") + ");"
	r.logger.Trace(q)
	commandTag, err := r.client.Exec(ctx, q, args...)
	if err != nil {
		return "", err
	}
	if commandTag.RowsAffected() != 1 {
		return "", errors.New("No row found to delete")
	}

	return ID, tx.Commit(ctx)
}
