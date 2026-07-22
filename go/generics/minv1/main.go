package main

import (
	"cmp"
	"fmt"
)

func min[T cmp.Ordered](a, b T) T {
	if a < b {
		return a
	}

	return b
}

func main() {
	var minInt8 = min[int8]

	fmt.Println(min[int](10, -11))
	fmt.Println(minInt8(-5, -1))
	fmt.Println(min("A", "a"))
}
