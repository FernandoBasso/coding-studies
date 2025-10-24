// Package binarysearchintv1 implements a binary search
// algorithm to search for an int.
package binarysearchintv1

// Search performs a binary search of x in xs.
func Search(x int, xs []int) bool {
	lo := 0
	hi := len(xs)
	var mid int
	var val int

	for lo < hi {
		mid = lo + (hi-lo)/2
		val = xs[mid]

		if x == val {
			return true
		} else if x < val {
			hi = mid
		} else {
			lo = mid + 1
		}
	}

	return false
}
