package linearsearchintv1_test

import (
	"testing"
	"github.com/stretchr/testify/require"
	v1 "dsago/linear-search-int/go/v1"
)

func TestSearch(t *testing.T) {
	t.Run("should find nothing if input is empty", func(t *testing.T) {
		require.False(t, v1.Search(1, []int{}))
	})

	t.Run("should find if anywhere in the array", func(t *testing.T) {
		require.True(t, v1.Search(1, []int{1}))
		require.True(t, v1.Search(1, []int{-5, 1, 3}))
		require.True(t, v1.Search(1, []int{-5, 3, 1}))
	})
}
