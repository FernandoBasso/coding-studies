package todo_test

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"testing"

	"devhowto.dev/gocmdlinebook/ch02/todo/cmd/todo"
)

var (
	binName  = "todo"
	fileName = ".todo.json"
)

func TestMain(m *testing.M) {
	fmt.Println("Building tool...")

	if runtime.GOOS == "windows" {
		binName += ".exe"
	}

	build := exec.Command("go", "build", "-o", binName)
	if err := build.Run(); err != nil {
		fmt.Fprintf(os.Stderr, "Cannot build tool %s: %s", binName, err)
		os.Exit(1)
	}

	fmt.Println("Running tests...")

	result := m.Run()

	fmt.Println("Cleaning up...")

	os.Remove(binName)
	os.Remove(fileName)

	os.Exit(result)
}

func TestTestTodoCLI(t *testing.T) {
	task := "Task #1"

	dir, err := os.Getwd()
	if err != nil {
		t.Fatal(err)
	}

	cmdPath := filepath.Join(dir, binName)

	t.Run("can add a task", func(t *testing.T) {
		cmd := exec.Command(cmdPath, strings.Split(task, " ")...)

		if err := cmd.Run(); err != nil {
			t.Fatal(err)
		}
	})

	t.Run("can list tasks", func(t *testing.T) {
		cmd := exec.Command(cmdPath)
		out, err := cmd.CombinedOutput()
		if err != nil {
			t.Fatal(err)
		}

		want := task + "\n"

		if string(out) != want {
			t.Errorf("Want %q, got %q", want, string(out))
		}
	})
}

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
