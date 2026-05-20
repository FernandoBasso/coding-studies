// Package todo implements the todo application logic.
package todo

import (
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"
)

type task struct {
	ID          uuid.UUID
	Title       string
	CreatedAt   time.Time
	CompletedAt time.Time
}

// IzZero returns a boolean indicating whether the task an empty struct.
func (t *task) IsZero() bool {
	return t.Title == "" && t.CreatedAt.IsZero() && t.CompletedAt.IsZero()
}

type todo struct {
	Tasks map[uuid.UUID]task
}

func New() *todo {
	return &todo{
		Tasks: make(map[uuid.UUID]task, 32),
	}
}

func (t *todo) Add(title string) (task, error) {
	if title == "" {
		return task{}, errors.New("task title cannot be empty")
	}

	task := task{
		ID:          uuid.New(),
		Title:       title,
		CreatedAt:   time.Now(),
		CompletedAt: time.Time{},
	}

	t.Tasks[task.ID] = task

	return task, nil
}

// FindByID returns a task found by ID, or a zero-valued task ID not found.
func (t *todo) FindByID(id uuid.UUID) task {
	for _, item := range t.Tasks {
		if item.ID == id {
			return item
		}
	}

	return task{}
}

func (t *todo) Complete(id uuid.UUID) (task, error) {
	taskToComplete := t.FindByID(id)
	if taskToComplete.IsZero() {
		return task{},
			fmt.Errorf("could not find task with id %s", id)
	}

	item := t.Tasks[id]
	item.CompletedAt = time.Now()

	t.Tasks[id] = item

	return item, nil
}

//
// Maps in Go are hash tables that rehash and relocate entries when they
// grow. If &t.Tasks[id] were a real pointer, that pointer could be
// invalidated the next time anyone inserted into the map and you’d have a
// dangling reference to memory that now holds a different key’s value, or
// nothing at all. Rather than introduce some pinning mechanism or pretend
// the pointer is stable when it isn’t, Go just says: map elements aren’t
// addressable
//
