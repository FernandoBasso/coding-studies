////
// How to run this program:
//
// $ TODO_FILENAME=db.json go run main.go -task 'Learn Go'
//
// $ 0< db.json jq
// [
//   {
//     "Task": "Learn Go",
//     "Done": false,
//     "CreatedAt": "2026-04-01T07:55:39.464827815-03:00",
//     "CompletedAt": "0001-01-01T00:00:00Z"
//   }
// ]
////

package main

import (
	"flag"
	"fmt"
	"os"

	"devhowto.dev/gocmdlinebook/ch02/todo"
)

// Default unless overridden with TODO_FILENAME env var.
var todoFileName = ".todos.json"

func main() {
	flag.Usage = func() {
		fmt.Fprintf(flag.CommandLine.Output(), "\nCommand Line TODO app!\n\n")
		flag.PrintDefaults()
	}

	task := flag.String("task", "", "Add task")
	list := flag.Bool("list", false, "List tasks")
	complete := flag.Int("complete", 0, "Index of item to mark as complete")

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

	case *task != "":
		l.Add(*task)

		if err := l.Save(todoFileName); err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}

	default:
		fmt.Fprintln(os.Stderr, "Invalid option")
		os.Exit(1)
	}
}

// go run ./main.go
//=> []int{10, 20, 40, 50, 60, 70}
