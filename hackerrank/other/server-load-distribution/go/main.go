package main

import (
	"fmt"
	"slices"
	"sort"
)

type ServerWithIdx struct {
	Idx int
	Cap int
}

func sortByCapAsc(srv1, srv2 ServerWithIdx) int {
	return srv1.Cap - srv2.Cap
}

func dist(capacities []int, loads []int) []int {
	n := len(capacities)
	capacitiesAsc := capacities[:]
	loadsDesc := loads[:]

	serverCapacitiesAscWithIdx := make([]ServerWithIdx, n)
	for i := range n {
		serverCapacitiesAscWithIdx[i] = ServerWithIdx{
			Idx: i,
			Cap: capacitiesAsc[i],
		}
	}

	// ASC
	slices.SortFunc(serverCapacitiesAscWithIdx, sortByCapAsc)
	fmt.Printf("%#v\n", capacitiesAsc)

	// DESC
	sort.Sort(sort.Reverse(sort.IntSlice(loadsDesc)))

	optimizedServerLoad := make([]int, n)

	for i := range n {
		optimizedServerLoad[serverCapacitiesAscWithIdx[i].Idx] = loadsDesc[i]
	}

	return optimizedServerLoad
}

func main() {
	capacities := []int{4, 5, 6}
	loads := []int{1, 2, 3}

	res := dist(capacities, loads)
	fmt.Printf("%#v\n", res)
}
