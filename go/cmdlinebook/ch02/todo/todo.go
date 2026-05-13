// Package todo implements the todo application logic.
package todo

import (
	"errors"
	"time"
)

type task struct {
	Title       string
	Done        bool
	CreatedAt   time.Time
	CompletedAt time.Time
}

type Todo struct {
	Tasks []task
}

func (t *Todo) Add(title string) error {
	if title == "" {
		return errors.New("task title cannot be empty")
	}

	task := task{
		Title:       title,
		Done:        false,
		CreatedAt:   time.Now(),
		CompletedAt: time.Time{},
	}

	t.Tasks = append(t.Tasks, task)

	return nil
}
