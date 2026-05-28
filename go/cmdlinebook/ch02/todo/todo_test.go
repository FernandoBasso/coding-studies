package todo_test

import (
	"testing"

	"github.com/google/uuid"

	"todo"
)

func TestTodo(t *testing.T) {
	t.Run("Add())", func(t *testing.T) {
		t.Run("returns an error when the title is empty", func(t *testing.T) {
			td := todo.New()
			if _, err := td.Add(""); err == nil {
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

	t.Run("Delete())", func(t *testing.T) {
		t.Run("returns an error when a task to delete is not found", func(t *testing.T) {
			todo := todo.New()

			_, err := todo.Delete(uuid.New())
			if err == nil {
				wantQ(t, "an error", "nil")
			}
		})

		t.Run("returns the task being deleted, and removes it from the collection", func(t *testing.T) {
			todo := todo.New()
			learnGoAdded, _ := todo.Add("Learn Go")

			learnGoRemoved, err := todo.Delete(learnGoAdded.ID)
			if err != nil {
				wantQ(t, "no error", "an error")
			}

			if emptyTask := todo.FindByID(learnGoRemoved.ID); !emptyTask.IsZero() {
				wantQ(t, "empty task (because it was not found)", "a non empty task")
			}
		})
	})

	t.Run("Save())", func(t *testing.T) {
		t.Run("returns error if there is a problem saving db to a file", func(t *testing.T) {
			todo := todo.New()
			todo.Add("Learn DDD")

			err := todo.Save("/path/that/does/not/exist/db_todos.json")
			if err == nil {
				wantQ(t, "an error", "nil")
			}
		})

		t.Run("can persist and load the todos", func(t *testing.T) {
			todoToSave := todo.New()
			task, _ := todoToSave.Add("Learn Haskell")
			//
			err := todoToSave.Save("./db_todos.json")
			if err != nil {
				t.Fatalf("could not save file to ./db_todos.json\n%s", err)
			}

			todoToLoad := todo.New()
			todoToLoad.Load("./db_todos.json")

			found := todoToLoad.FindByID(task.ID)
			if found.Title != "Learn Haskell" {
				wantQ(t, "Learn Haskell", found.Title)
			}
		})
	})
}

func wantQ(t *testing.T, want, got string) {
	t.Errorf("\n\n--> Want:\n\n%q\n\n--> Got:\n\n%q\n\n", want, got)
}
