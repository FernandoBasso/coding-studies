// Package binarysearchint implements a binary search
// algorithm to search for an int.
package binarysearchint

func Search(needle int, haystack []int) bool {
	var lo = 0
	var hi = len(haystack)
	var mid int
	var val int

	for lo < hi {
		mid = lo + (hi-lo)/2
		val = haystack[mid]

		if needle == val {
			return true
		} else if needle < val {
			hi = mid
		} else {
			lo = mid + 1
		}
	}

	return false
}
