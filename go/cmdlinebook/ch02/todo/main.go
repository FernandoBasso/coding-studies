package main

import "fmt"

func main() {
	xs := []int{10, 20, 30, 40, 50, 60, 70}
	xs = append(xs[:2], xs[3:]...)
	fmt.Printf("%#v\n", xs)
}

// go run ./main.go
//=> []int{10, 20, 40, 50, 60, 70}
