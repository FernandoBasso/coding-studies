package main_test

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"testing"
)

var binName = "todo"

func TestMain(m *testing.M) {
	fmt.Println("Building todo...")

	build := exec.Command("go", "build", "-o", binName)
	if err := build.Run(); err != nil {
		fmt.Fprintf(os.Stderr, "Cannot build %s: %s\n", binName, err)
	}

	if err := os.Chmod(binName, 0744); err != nil {
		fmt.Fprintf(os.Stderr, "Cannot make %s executable\n", binName)
	}

	fmt.Println("Running tests...")

	exitCode := m.Run()

	os.Exit(exitCode)
}

func TestTodoCLI(t *testing.T) {
	dir, err := os.Getwd()
	if err != nil {
		t.Fatal(err)
	}

	cmdPath := filepath.Join(dir, binName)

	t.Run("can add a task", func(t *testing.T) {
		cmd := exec.Command(cmdPath, "-add", "Learn Go")
		if err := cmd.Run(); err != nil {
			t.Fatal(err)
		}
	})
}
