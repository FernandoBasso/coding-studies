package todo_test

import (
	"testing"

	"todo"
)

func TestTodo(t *testing.T) {
	t.Run("Add())", func(t *testing.T) {
		t.Run("returns an error when the title is empty", func(t *testing.T) {
			todo := todo.Todo{}
			if err := todo.Add(""); err == nil {
				wantQ(t, "an error", "nil")
			}
		})

		t.Run("successfully adds a task", func(t *testing.T) {
			todo := todo.Todo{}
			if err := todo.Add("Learn TDD"); err != nil {
				t.Fatal(err)
			}

			task := todo.Tasks[0]
			if task.Title != "Learn TDD" {
				wantQ(t, "Learn TDD", task.Title)
			}
		})

	})
}

func wantQ(t *testing.T, want, got string) {
	t.Errorf("\n\n--> Want:\n\n%q\n\n--> Got:\n\n%q\n\n", want, got)
}
