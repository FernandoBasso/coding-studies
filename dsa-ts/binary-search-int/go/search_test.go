package binarysearchint_test

import (
	"testing"

	bsi "dsago/binary-search-int/go/v2"
	"github.com/stretchr/testify/require"
)

func TestBinarySearch(t *testing.T) {
	tests := []struct {
		name     string
		target   int
		nums     []int
		expected bool
	}{
		{
			name:     "should find nothing if input is empty",
			target:   1,
			nums:     []int{},
			expected: false,
		},
		{
			name:     "should find the value on the very middle the first time",
			target:   5,
			nums:     []int{1, 3, 5, 7, 9},
			expected: true,
		},
		{
			name:     "finds the value on the middle of the first left half",
			target:   2,
			nums:     []int{1, 2, 3, 4, 5, 6, 7},
			expected: true,
		},
		{
			name:     "finds the value on the left of the first left half",
			target:   1,
			nums:     []int{1, 2, 3, 4, 5, 6, 7},
			expected: true,
		},
		{
			name:     "finds the value on the right of the first left half",
			target:   3,
			nums:     []int{1, 2, 3, 4, 5, 6, 7},
			expected: true,
		},
		{
			name:     "finds the value on the middle of the first right half",
			target:   6,
			nums:     []int{1, 2, 3, 4, 5, 6, 7},
			expected: true,
		},
		{
			name:     "finds the value on the left of the first right half",
			target:   5,
			nums:     []int{1, 2, 3, 4, 5, 6, 7},
			expected: true,
		},
		{
			name:     "finds the value on the right of the first right half",
			target:   7,
			nums:     []int{1, 2, 3, 4, 5, 6, 7},
			expected: true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			require.Equal(t, tt.expected, bsi.Search(tt.target, tt.nums))
		})
	}
}
