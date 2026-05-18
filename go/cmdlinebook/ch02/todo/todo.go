// Package todo implements the todo application logic.
package todo

import (
	"errors"
	"time"

	"github.com/google/uuid"
)

type task struct {
	ID          uuid.UUID
	Title       string
	Done        bool
	CreatedAt   time.Time
	CompletedAt time.Time
}

// IzZero returns a boolean indicating whether the task an empty struct.
func (t *task) IsZero() bool {
	return t.Title == "" && t.CreatedAt.IsZero() && t.CompletedAt.IsZero()
}

type Todo struct {
	Tasks []task
}

func (t *Todo) Add(title string) error {
	if title == "" {
		return errors.New("task title cannot be empty")
	}

	task := task{
		ID:          uuid.New(),
		Title:       title,
		Done:        false,
		CreatedAt:   time.Now(),
		CompletedAt: time.Time{},
	}

	t.Tasks = append(t.Tasks, task)

	return nil
}
