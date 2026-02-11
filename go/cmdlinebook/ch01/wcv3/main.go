package main

import (
	"bufio"
	"flag"
	"fmt"
	"io"
	"os"
)

// How to run this program:
//
//	$ echo 'foo bar qux' | go run ./main.go
//	$ echo $'may the force\nbe with you' | go run ./main.go -l
//	$ echo Hey | go run ./main.go -b
//	$ echo 'Hello!' | go run ./main.go -l -b
func main() {
	countByLines := flag.Bool("l", false, "Count lines")
	countByBytes := flag.Bool("b", false, "Count bytes. Takes precedence over other flags")

	flag.Parse()

	fmt.Println(count(os.Stdin, *countByLines, *countByBytes))
}

func count(r io.Reader, countByLines, countByBytes bool) int {
	scanner := bufio.NewScanner(r)

	switch {
	case countByBytes:
		scanner.Split(bufio.ScanBytes)
	case countByLines:
		scanner.Split(bufio.ScanLines)
	default:
		scanner.Split(bufio.ScanWords)
	}

	wc := 0

	for scanner.Scan() {
		wc += 1
	}

	if err := scanner.Err(); err != nil {
		fmt.Fprintf(os.Stderr, "Error: %v\n", err)
	}

	return wc
}
