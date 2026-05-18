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

type Todo struct {
	Tasks []task
}

func (t *Todo) Add(title string) (task, error) {
	if title == "" {
		return task{}, errors.New("task title cannot be empty")
	}

	task := task{
		ID:          uuid.New(),
		Title:       title,
		CreatedAt:   time.Now(),
		CompletedAt: time.Time{},
	}

	t.Tasks = append(t.Tasks, task)

	return task, nil
}

// FindByID returns a task found by ID, or a zero-valued task ID not found.
func (t *Todo) FindByID(id uuid.UUID) task {
	for _, item := range t.Tasks {
		fmt.Printf("\nID: %d\n", item.ID)
		if item.ID == id {
			return item
		}
	}

	return task{}
}

// func (t *Todo) Complete(id int) (task, error) {
// 	taskToComplete := t.FindByID(id)
// 	if taskToComplete.CreatedAt.IsZero() {
// 		return task{}, errors.New(fmt.Sprint("could not find task with id %d", id))
// 	}
//
// 	t.Tasks[id].CompletedAt = time.Now()
// }
