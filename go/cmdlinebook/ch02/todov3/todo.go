// Package todo is a command line todo list app.
package todo

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"time"
)

type item struct {
	Task        string
	Done        bool
	CreatedAt   time.Time
	CompletedAt time.Time
}

type List []item

// Add creates a new task with the given text and appends it to the
// list of todos.
func (l *List) Add(task string) {
	t := item{
		Task:        task,
		Done:        false,
		CreatedAt:   time.Now(),
		CompletedAt: time.Time{},
	}

	*l = append(*l, t)
}

// Complete marks the task item at the given index complete. Returns
// an error if the given index does not exist.
func (l *List) Complete(i int) error {
	if i <= 0 || i > len(*l) {
		return fmt.Errorf("item %d does not exist", i)
	}

	(*l)[i-1].Done = true
	(*l)[i-1].CompletedAt = time.Now()

	return nil
}

// Delete removes task at the given index from the list. Returns
// an error if the given index does not exist.
func (l *List) Delete(i int) error {
	if i < 0 || i > len(*l) {
		return fmt.Errorf("item %d does not exist", i)
	}

	*l = append((*l)[:i-1], (*l)[i:]...)

	return nil
}

// Save encode the list as JSON as saves it to the file system
// using the provided file name.
func (l *List) Save(filename string) error {
	json, err := json.Marshal(l)
	if err != nil {
		return err
	}

	return os.WriteFile(filename, json, 0644)
}

// Get opens a file and parses it into a [List] of tasks.
func (l *List) Get(filename string) error {
	file, err := os.ReadFile(filename)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return nil
		}

		return err
	}

	if len(file) == 0 {
		return nil
	}

	return json.Unmarshal(file, l)
}

func (l *List) String() string {
	output := ""

	for idx, todo := range *l {
		check := "  "
		if todo.Done {
			check = "[✔]"
		} else {
			check = "[ ]"
		}

		// idx+1 output indexes from 1 instead of 0.
		output += fmt.Sprintf("%s %d: %s\n", check, idx+1, todo.Task)
	}

	return output
}
