package main

import (
	"cmp"
	"fmt"
	"slices"
)

func sortDesc(a int, b int) int {
	return cmp.Compare(b, a)
}

func toTupleWithIndex(xs []int) [][2]int {
	tups := make([][2]int, 0)

	for i, v := range xs {
		tups = append(tups, [2]int{v, i})
	}

	return tups
}

func getRedistributedLoad(capacities []int, loads []int) []int {
	n := len(capacities)
	loadsDesc := loads[:]
	capacitiesWithIndex := toTupleWithIndex(capacities[:])
	fmt.Printf("%#v\n", capacitiesWithIndex)

	// Sort capacities in descending order.
	slices.SortFunc(capacitiesWithIndex, func(tupA [2]int, tupB [2]int) int {
		return cmp.Compare(tupB[0], tupA[0])
	})
	fmt.Printf("%#v\n", capacitiesWithIndex)
	slices.Sort(loadsDesc)

	result := make([]int, n)
	for i := range n {
		tup := capacitiesWithIndex[i]
		result[tup[1]] = loadsDesc[i]
	}

	return result
}

func main() {
	cs := []int{4, 5, 6}
	ls := []int{3, 1, 2}
	optimized := getRedistributedLoad(cs, ls)
	fmt.Printf("%#v\n", optimized)
}
