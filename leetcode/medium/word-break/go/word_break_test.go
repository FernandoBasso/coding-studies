package word_break

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestWordBreak(t *testing.T) {
	t.Run("IsPalindrome()", func(t *testing.T) {
		t.Skip()
		t.Run("emtpy string is a palindrome", func(t *testing.T) {
			require.True(t, IsPalindrome(""))
		})

		t.Run("single letter word is a palindrome", func(t *testing.T) {
			require.True(t, IsPalindrome("z"))
			require.True(t, IsPalindrome("K"))
		})

		t.Run("simple words that are palindromes", func(t *testing.T) {
			require.True(t, IsPalindrome("ABBA"))
			require.True(t, IsPalindrome("racecar"))
		})

		t.Run("false for some simple non-palindrome words", func(t *testing.T) {
			require.False(t, IsPalindrome("yz"))
			require.False(t, IsPalindrome("hello"))
		})
	})

	t.Run("WordBreak()", func(t *testing.T) {
		t.Run("simple case 1", func(t *testing.T) {
			require.True(t, WordBreak("leetcode", []string{"leet", "code"}))
		})

		t.Run("simple case 2", func(t *testing.T) {
			require.True(t, WordBreak("applepenapple", []string{"apple", "pen"}))
		})

		t.Run("not found", func(t *testing.T) {
			require.False(t, WordBreak("catsandog", []string{"cats", "dog", "sand", "and", "cat"}))
		})
	})
}
