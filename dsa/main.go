package main

func f(i int8) {
	f(i)
}

func main() {
	f(1)
}

//=> $ go run main.go
//=> 0
//=> 1
//=> 2
//=> 3
//=> 4
