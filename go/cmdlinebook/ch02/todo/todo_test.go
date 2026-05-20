package todo_test

import (
	"testing"

	"github.com/google/uuid"

	"todo"
)

func TestTodo(t *testing.T) {
	t.Run("Add())", func(t *testing.T) {
		t.Run("returns an error when the title is empty", func(t *testing.T) {
			todo := todo.New()
			if _, err := todo.Add(""); err == nil {
				wantQ(t, "an error", "nil")
			}
		})

		t.Run("successfully adds a task", func(t *testing.T) {
			todo := todo.New()
			task, err := todo.Add("Learn TDD")
			if err != nil {
				t.Fatal(err)
			}

			if task.Title != "Learn TDD" {
				wantQ(t, "Learn TDD", task.Title)
			}
		})
	})

	t.Run("FindByID())", func(t *testing.T) {
		t.Run("returns a zero-valued task when not found", func(t *testing.T) {
			todo := todo.New()
			todo.Add("Learn DDD")
			todo.Add("Learn TDD")

			// Let's assume we'll not have an ID of 9001 while
			// the tests are running.
			lastTask := todo.FindByID(uuid.New())
			if !lastTask.IsZero() {
				wantQ(t, "an empty task", "a valid, filled-in task")
			}
		})

		t.Run("returns a valid, filled in task when found by ID", func(t *testing.T) {
			todo := todo.New()
			taskJustAdded, _ := todo.Add("Play Tomb Raider I")

			taskFoundByID := todo.FindByID(taskJustAdded.ID)
			if taskFoundByID.Title != "Play Tomb Raider I" {
				wantQ(t, "the task just added", "an empty, zero-valued task")
			}
		})
	})

	t.Run("Complete())", func(t *testing.T) {
		t.Run("returns an error when a task to complete is not found", func(t *testing.T) {
			todo := todo.New()

			_, err := todo.Complete(uuid.New())
			if err == nil {
				wantQ(t, "an error", "nil")
			}
		})

		t.Run("can complete a task", func(t *testing.T) {
			todo := todo.New()
			todo.Add("Learn TDD")
			taskDDD, _ := todo.Add("Learn DDD")

			todo.Complete(taskDDD.ID)
			if todo.FindByID(taskDDD.ID).CompletedAt.IsZero() {
				wantQ(t, "a CompletedAt date", "a zero-valued CreatedAt date")
			}
		})
	})
}

func wantQ(t *testing.T, want, got string) {
	t.Errorf("\n\n--> Want:\n\n%q\n\n--> Got:\n\n%q\n\n", want, got)
}
