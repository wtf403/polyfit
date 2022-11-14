package user

type User struct {
	ID           string `json:"is" bson:"_id,omitempty"`
	Email        string `json:"email" bson:"email"`
	UserName     string `json:"userName" bson:"userName"`
	PasswordHash string `json:"-" bson:"password"`
}

type CreateUserDTO struct {
	Email        string `json:"email"`
	UserName     string `json:"userName"`
	PasswordHash string `json:"password" `
}
