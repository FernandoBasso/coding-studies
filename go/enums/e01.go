package main

import (
	"errors"
	"fmt"
)

type Role string

const (
	Unknown   Role = ""
	Guest     Role = "guest"
	Member    Role = "member"
	Moderator Role = "moderator"
	Admin     Role = "admin"
)

func CreateUser(r Role) error {
	if r == Unknown {
		return errors.New("no role provided")
	}

	fmt.Println("Creating role", r)

	return nil
}

func main() {
	CreateUser("un")
}
