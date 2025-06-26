package main

import (
	"fmt"
	"io"
	"log"
	"os"
)

func main() {
	qf := NewQuickFind(10)
	qf.Display()

	fmt.Printf("Connected 4 and 3? %#v\n", qf.Connected(4, 3))
	qf.Union(4, 3)
	qf.Display()
	fmt.Printf("Connected 4 and 3? %#v\n", qf.Connected(4, 3))

	var a, b int

	for {
		_, err := fmt.Scanf("%d %d", &a, &b)
		if err == io.EOF {
			log.Println("EOD")
			os.Exit(0)
		}

		fmt.Printf("%#v %#v\n", a, b)
	}
}

type QuickFindSpec interface {
	Display()
	Connected(p int, q int) bool
	Union(p int, q int)
}

type QuickFind struct {
	ids []int
}

func NewQuickFind(n int) *QuickFind {
	var ids = make([]int, n)

	for i := range n {
		ids[i] = i
	}

	return &QuickFind{ids}
}

func (qf *QuickFind) Display() {
	fmt.Printf("%#v\n", qf.ids)
}

func (qf *QuickFind) Connected(p int, q int) bool {
	return qf.ids[p] == qf.ids[q]
}

// Union connects p and q together.
//
// Changes all entries with ids[p] to ids[q].
func (qf *QuickFind) Union(p int, q int) {
	pid := qf.ids[p]
	qid := qf.ids[q]

	for i := range len(qf.ids) {
		if qf.ids[i] == pid {
			qf.ids[i] = qid
		}
	}
}
