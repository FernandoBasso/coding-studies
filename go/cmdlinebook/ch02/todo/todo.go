// Package todo implements the todo application logic.
package todo

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"time"

	"github.com/google/uuid"
)

type task struct {
	ID          uuid.UUID
	Title       string
	CreatedAt   time.Time
	CompletedAt time.Time
}

type todoApp struct {
	Tasks map[uuid.UUID]task
}

// New returns a new todo with a slice of tasks with an initial
// capacity of 32.
func New() *todoApp {
	return &todoApp{
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
func (t *todoApp) Add(title string) (task, error) {
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
func (t *todoApp) FindByID(id uuid.UUID) task {
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
func (t *todoApp) Complete(id uuid.UUID) (task, error) {
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
func (t *todoApp) Delete(id uuid.UUID) (task, error) {
	taskToDelete, ok := t.Tasks[id]
	if !ok {
		return task{}, fmt.Errorf("could not find task with id %s", id)
	}

	delete(t.Tasks, id)

	return taskToDelete, nil
}

// Save converts the task list to JSON and saves to fileName. Returns an
// error if either json conversion or writing the file fails.
func (t *todoApp) Save(fileName string) error {
	json, err := json.Marshal(t.Tasks)
	if err != nil {
		return err
	}

	return os.WriteFile(fileName, json, 0644)
}

// Load loads a todo list from fileName and returns an error if the file
// cannot be read or the data cannot be converted to the internal todo
// list representation.
func (t *todoApp) Load(fileName string) error {
	data, err := os.ReadFile(fileName)
	if err != nil {
		return err
	}

	json.Unmarshal(data, &t.Tasks)

	return nil
}
