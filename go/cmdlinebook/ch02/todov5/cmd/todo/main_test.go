package main_test

import (
	"fmt"
	"io"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"testing"
	"time"

	"devhowto.dev/gocmdlinebook/ch02/todo"
)

var (
	binName  = "todo"
	fileName = ".todos.json"
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

	if err := os.Chmod(binName, 0744); err != nil {
		fmt.Fprintf(os.Stderr, "Cannot make %s executable", binName)
		os.Exit(1)
	}

	fmt.Println("Running tests...")

	result := m.Run()

	fmt.Println("Cleaning up...")

	os.Remove(binName)
	err := os.Remove(fileName)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error removing %s.", fileName)
		fmt.Fprintln(os.Stderr, err)
	}

	os.Exit(result)
}

func TestTestTodoCLI(t *testing.T) {
	now := func() time.Time { return todo.MyNow() }

	task1 := "Task 1"

	dir, err := os.Getwd()
	if err != nil {
		t.Fatal(err)
	}

	cmdPath := filepath.Join(dir, binName)
	fmt.Printf("%#v", cmdPath)

	t.Run("can add a task", func(t *testing.T) {
		cmd := exec.Command(cmdPath, "-add", task1)

		if err := cmd.Run(); err != nil {
			t.Fatal(err)
		}
	})

	task2 := "Task 2"

	t.Run("can add a second task", func(t *testing.T) {
		cmd := exec.Command(cmdPath, "-add")
		cmdStdin, err := cmd.StdinPipe()
		if err != nil {
			t.Fatal(err)
		}

		io.WriteString(cmdStdin, task2)
		cmdStdin.Close()

		if err := cmd.Run(); err != nil {

		}
	})

	t.Run("can list tasks", func(t *testing.T) {
		cmd := exec.Command(cmdPath, "-list")
		out, err := cmd.CombinedOutput()
		if err != nil {
			t.Fatal(err)
		}

		want := "[ ] 1: " + task1 + "\n[ ] 2: " + task2 + "\n"

		if string(out) != want {
			t.Errorf("Want %q, got %q", want, string(out))
		}
	})

	t.Run("can list tasks in verbose mode", func(t *testing.T) {
		cmd := exec.Command(cmdPath, "-list", "-verbose")
		out, err := cmd.CombinedOutput()
		if err != nil {
			t.Fatal(err)
		}

		task1now := now().Format(time.DateTime)

		want := fmt.Sprintf(`[ ] 1: Task 1, Created at: %s
[ ] 2: Task 2, Created at: %s
`, task1now, task1now)

		if string(out) != want {
			t.Errorf("Want %q, got %q", want, string(out))
		}
	})

	t.Run("can mark a task as complete", func(t *testing.T) {
		completeCmd := exec.Command(cmdPath, "-complete", "1")
		if err := completeCmd.Run(); err != nil {
			t.Fatal(err)
		}

		listCmd := exec.Command(cmdPath, "-list", "-verbose")
		out, err := listCmd.CombinedOutput()
		if err != nil {
			t.Fatal(err)
		}

		created := now().Format(time.DateTime)

		want := fmt.Sprintf(`[✔] 1: Task 1, Created at: %s
[ ] 2: Task 2, Created at: %s
`, created, created)

		if string(out) != want {
			t.Errorf("Want %q, got %q", want, string(out))
		}
	})

	t.Run("can delete tasks", func(t *testing.T) {
		//
		// At this point we have task 1 an task 2 from earlier tests.
		// They have indexes 1 and 2.
		//

		delCmd := exec.Command(cmdPath, "-del", "1")
		if err := delCmd.Run(); err != nil {
			t.Fatal(err)
		}

		listCmd := exec.Command(cmdPath, "-list")
		out, err := listCmd.CombinedOutput()
		if err != nil {
			t.Fatal(err)
		}

		//
		// Now that task 1 was removed, task 2 gets “moved” to index 1.
		//
		want := "[ ] 1: " + task2 + "\n"

		if string(out) != want {
			t.Errorf("Want %q, got %q", want, string(out))
		}
	})
}
