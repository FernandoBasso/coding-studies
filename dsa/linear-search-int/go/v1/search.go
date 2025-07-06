package linearsearchintv1

func Search(needle int, haystack []int) bool {
	for _, v := range haystack {
		if v == needle {
			return true
		}
	}

	return false
}
