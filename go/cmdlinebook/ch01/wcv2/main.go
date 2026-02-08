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
func main() {
	// Define a boolean flag -l. When present, count by lines, otherwise
	// default to count by words.
	countByLines := flag.Bool("l", false, "Count lines")
	flag.Parse()

	fmt.Println(count(os.Stdin, *countByLines))
}

func count(r io.Reader, countByLines bool) int {
	scanner := bufio.NewScanner(r)

	if countByLines == false {
		scanner.Split(bufio.ScanWords)
	}

	wc := 0

	for scanner.Scan() {
		wc += 1
	}

	return wc
}
