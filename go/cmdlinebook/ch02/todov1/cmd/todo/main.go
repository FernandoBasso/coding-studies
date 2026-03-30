package main

import (
	"flag"
	"fmt"
	"os"

	"devhowto.dev/gocmdlinebook/ch02/todov1"
)

const todoFileName = ".todos.json"

func main() {
	flag.Usage = func() {
		fmt.Fprintf(flag.CommandLine.Output(), "\nCommand Line TODO app!\n\n")
		flag.PrintDefaults()
	}

	task := flag.String("task", "", "Add task")
	list := flag.Bool("list", false, "List tasks")
	complete := flag.Int("complete", 0, "Index of item to mark as complete")

	flag.Parse()

	l := &todov1.List{}

	if err := l.Get(todoFileName); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}

	switch {
	case *list:
		for _, item := range *l {
			if !item.Done {
				fmt.Println(item.Task)
			}
		}

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
