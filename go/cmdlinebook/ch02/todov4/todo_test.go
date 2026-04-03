package todo_test

import (
	"os"
	"testing"

	todo "devhowto.dev/gocmdlinebook/ch02/todo"
)

func TestTodo(t *testing.T) {
	t.Run("can add a task", func(t *testing.T) {
		list := todo.List{}

		task := "Learn Go"
		list.Add(task)

		if list[0].Task != task {
			t.Errorf("Expected %q, got %q", task, list[0].Task)
		}
	})

	t.Run("task can be marked as completed", func(t *testing.T) {
		list := todo.List{}

		task := "Learn TDD"
		list.Add(task)

		if list[0].Done {
			t.Errorf("Task should not be completed yet")
		}

		list.Complete(1)

		if !list[0].Done {
			t.Errorf("Task should be completed now")
		}
	})

	t.Run("can delete tasks", func(t *testing.T) {
		list := todo.List{}

		tasks := []string{
			"Learn Go",
			"Learn TDD",
			"Play Tomb Raider",
		}

		for _, task := range tasks {
			list.Add(task)
		}

		if len(list) != 3 {
			t.Errorf("Want 3 tasks, got %d", len(list))
		}

		list.Delete(2)

		if len(list) != 2 {
			t.Errorf("Want 2 tasks, got %d", len(list))
		}

		if list[1].Task != tasks[2] {
			t.Errorf("Want %q, got %q", tasks[2], list[1].Task)
		}
	})

	t.Run("can persist an read a todo list file", func(t *testing.T) {
		list1 := todo.List{}
		list2 := todo.List{}

		task := "Play Tomb Raider I"
		list1.Add(task)

		tmpfile, err := os.CreateTemp("", "")
		if err != nil {
			t.Fatalf("Error creating temp file %s", tmpfile.Name())
		}
		defer os.Remove(tmpfile.Name())

		if err := list1.Save(tmpfile.Name()); err != nil {
			t.Fatalf("Error saving list to file %s:", err)
		}

		if err = list2.Get(tmpfile.Name()); err != nil {
			t.Fatalf("Error reading file into a list %s:", err)
		}

		if list1[0].Task != list2[0].Task {
			t.Errorf("Task %q should match %q task", list1[0].Task, list2[0].Task)
		}
	})
}
