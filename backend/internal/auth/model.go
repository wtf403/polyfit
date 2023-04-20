package auth

import "github.com/golang-jwt/jwt"

// Exercise represents the exercise model.

type User struct {
	Username *string `json:"username"`
	Password *string `json:"password"`
}

type Claims struct {
	Username string `json:"username"`
	jwt.StandardClaims
}
