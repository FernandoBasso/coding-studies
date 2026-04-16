// Run the program passing a task as an argument, or provide the
// task from STDIN.
//
//	$ TODO_FILENAME=db.json go run main.go -task 'Learn Go'
//	$ echo 'Learn TDD' | TODO_FILENAME=db.json go run main.go -add
//
// # Example output
//
//	$ 0< db.json jq
//	[
//	  {
//	    "Task": "Learn Go",
//	    "Done": false,
//	    "CreatedAt": "2026-04-03T07:58:38.347915133-03:00",
//	    "CompletedAt": "0001-01-01T00:00:00Z"
//	  },
//	  {
//	    "Task": "Learn TDD",
//	    "Done": false,
//	    "CreatedAt": "2026-04-03T08:00:02.452518393-03:00",
//	    "CompletedAt": "0001-01-01T00:00:00Z"
//	  }
//	]
package main

import (
	"bufio"
	"flag"
	"fmt"
	"io"
	"os"
	"strings"

	"devhowto.dev/gocmdlinebook/ch02/todo"
)

// Default nless overridden with TODO_FILENAME env var.
var todoFileName = ".todos.json"

func main() {
	intro := fmt.Sprintf(`
The program accepts TODO_FILENAME environment variable to specify
the database file name. Defaults to %s.
`, todoFileName)

	examples := `
EXAMPLES:

    $ TODO_FILENAME=mytodo.json go run main.go -add "Learn TDD"

Or, export the env var first:

    $ export TODO_FILENAME=mytodo.json
    $ go run main.go -add "Learn DDD"

Then, we can inspect the mytodo.json file:

    $ 0< mytodo.json jq
`

	flag.Usage = func() {
		fmt.Fprintf(flag.CommandLine.Output(), "\n== Command Line TODO app! ==\n")
		fmt.Fprintf(flag.CommandLine.Output(), "----------------------------\n")
		fmt.Fprintf(flag.CommandLine.Output(), "%s\n", intro)
		fmt.Fprintf(flag.CommandLine.Output(), "%s\n\n", "OPTIONS:")
		flag.PrintDefaults()
		fmt.Fprintf(flag.CommandLine.Output(), "%s", examples)
	}

	add := flag.Bool("add", false, "Add task from args or STDIN\n")
	del := flag.Int("del", 0, "Delete item at the given index\n")
	list := flag.Bool("list", false, "List tasks\n")
	complete := flag.Int("complete", 0, "Complete item at the given index\n")

	flag.Parse()

	l := &todo.List{}

	if os.Getenv("TODO_FILENAME") != "" {
		todoFileName = os.Getenv("TODO_FILENAME")
	}

	if err := l.Get(todoFileName); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}

	switch {
	case *list:
		fmt.Print(l)

	case *complete > 0:
		if err := l.Complete(*complete); err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}

		if err := l.Save(todoFileName); err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}

	case *del > 0:
		if err := l.Delete(*del); err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}

		if err := l.Save(todoFileName); err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}

	case *add:
		text, err := GetTask(os.Stdin, flag.Args()...)
		fmt.Printf("text: %#v\n", text)
		if err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}

		l.Add(text)

		if err := l.Save(todoFileName); err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}

	default:
		fmt.Fprintln(os.Stderr, "Invalid option")
		os.Exit(1)
	}
}

// GetTask decides where to get tasks from (params, STDIN,
// etc.) and returns the task as a string.
//
//	GetTask(os.Stdin, "Hello, World!")
func GetTask(r io.Reader, args ...string) (string, error) {
	if len(args) > 0 {
		return strings.Join(args, " "), nil
	}

	s := bufio.NewScanner(r)
	s.Scan()

	if err := s.Err(); err != nil {
		return "", err
	}

	if len(s.Text()) == 0 {
		return "", fmt.Errorf("task cannot be blank")
	}

	return s.Text(), nil
}
