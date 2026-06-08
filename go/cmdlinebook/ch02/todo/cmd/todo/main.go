package main

import (
	"errors"
	"flag"
	"fmt"
	"os"
	"strings"

	"todo"
)

var todoFileName = "db_todos.json"

func main() {
	fmt.Println("Todo!")
	helpIntro := fmt.Sprintf(`
The program accepts TODO_FILENAME environment variable to specify
the database file name. Defaults to %s.
`, todoFileName)

	helpExamples := `
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
		fmt.Fprintf(flag.CommandLine.Output(), "%s\n", helpIntro)
		fmt.Fprintf(flag.CommandLine.Output(), "%s\n\n", "OPTIONS:")
		flag.PrintDefaults()
		fmt.Fprintf(flag.CommandLine.Output(), "%s", helpExamples)
	}

	add := flag.Bool("add", false, "Add a task to the list.")

	flag.Parse()

	todoApp := todo.New()

	err := todoApp.Load(todoFileName)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}

	switch {
	case *add:
		task, err := getTask(flag.Args()...)
		if err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}

		fmt.Printf("%#v\n", task)

		_, err = todoApp.Add(task)
		if err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}

		if err := todoApp.Save(todoFileName); err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}
	}
}

func getTask(args ...string) (string, error) {
	if len(args) < 1 {
		return "", errors.New("-add flag requires a string parameter")
	}

	return strings.Join(args, " "), nil
}
