// Package wordbreak implements the word break algorithm solution.
package wordbreak

import (
	"slices"
)

func IsPalindrome(str string) bool {
	if str == "" || len(str) == 1 {
		return true
	}

	if str[0] != str[len(str)-1] {
		return false
	}

	return IsPalindrome(str[1 : len(str)-1])
}

func WordBreak(str string, words []string) bool {
	return WordBreakRec(str, 0, words)
}

func WordBreakRec(s string, i int, words []string) bool {
	strLen := len(s)

	if i == strLen {
		return true
	}

	prefix := ""

	for j := i; j < strLen; j++ {
		prefix += string(s[j])
		if slices.Contains(words, prefix) && WordBreakRec(s, j+1, words) {
			return true
		}
	}

	return false
}
