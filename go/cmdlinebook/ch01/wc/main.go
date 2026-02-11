package main

import (
	"bufio"
	"io"
)

// How to run this program:
//
//	$ echo 'foo bar qux' | go run ./main.go
//	$ echo $'may the force\nbe with you' | go run ./main.go -l
//	$ echo Hey | go run ./main.go -b
//	$ echo 'Hello!' | go run ./main.go -l -b
//
// When both -l and -b are present, -b wins.
func Count(r io.Reader, byLinesOrWords, byBytes bool) int {
	scanner := bufio.NewScanner(r)

	switch {
	case byBytes:
		scanner.Split(bufio.ScanBytes)
	case byLinesOrWords:
		scanner.Split(bufio.ScanLines)
	default:
		scanner.Split(bufio.ScanWords)
	}

	count := 0

	for scanner.Scan() {
		count++
	}

	return count
}
