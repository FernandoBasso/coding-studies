package main

import (
	"bytes"
	"testing"
)

func TestCountWords(t *testing.T) {
	b := bytes.NewBufferString("May the force be with you!")

	exp := 6
	res := count(b)

	if res != exp {
		t.Errorf("Expected %d, got %d", exp, res)
	}
}
