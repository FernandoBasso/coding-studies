package word_break

import (
	"fmt"
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
	return WordBreakRec(0, str, words)
}

func WordBreakRec(i int, str string, words []string) bool {
	strLen := len(str)

	fmt.Printf("%#v, %#v\n", i, strLen)
	if i == strLen {
		return true
	}

	prefix := ""

	for j := i; j < strLen; j++ {
		if slices.Contains(words, prefix) && WordBreakRec(i+1, str, words) {
			return true
		}
	}

	return false
}
