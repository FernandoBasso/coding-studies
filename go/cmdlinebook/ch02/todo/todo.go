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

type todo struct {
	Tasks map[uuid.UUID]task
}

// New returns a new todo with a slice of tasks with an initial
// capacity of 32.
func New() *todo {
	return &todo{
		Tasks: make(map[uuid.UUID]task, 32),
	}
}

// IzZero returns a boolean indicating whether the task an empty struct.
func (t *task) IsZero() bool {
	return t.Title == "" && t.CreatedAt.IsZero() && t.CompletedAt.IsZero()
}

// Add adds a new task to the collection and returns the task and a nil
// error, or, returns an empty task and an error the given task title is
// empty.
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

// Complete marks the task with the given ID as complete (sets its
// CompletedAt with time.Now()), and returns the completed task and a
// nil error. Returns a zero-valued task and an error if the task with
// the given id cannot be found.
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

// Delete deletes the task with the given id, and returns the deleted
// task and a nil error. If the task with the given id is not found,
// returns a zero-valued task and an error.
func (t *todo) Delete(id uuid.UUID) (task, error) {
	taskToDelete, ok := t.Tasks[id]
	if !ok {
		return task{}, fmt.Errorf("could not find task with id %s", id)
	}

	delete(t.Tasks, id)

	return taskToDelete, nil
}
