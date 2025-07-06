// Package binarysearchintv2 implements a binary search
// algorithm to search for an int.
package binarysearchintv2

func run(x int, xs []int, lo int, hi int) bool {
	if lo >= hi {
		return false
	}

	mid := lo + (hi-lo)/2
	val := xs[mid]

	if x == val {
		return true
	} else if x < val {
		return run(x, xs, lo, mid)
	} else {
		return run(x, xs, mid+1, hi)
	}
}

// Search performs a binary search of x in xs.
func Search(needle int, haystack []int) bool {
	return run(needle, haystack, 0, len(haystack))
}
