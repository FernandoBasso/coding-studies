package main

import (
	"bytes"
	"testing"
)

func TestCountWords(t *testing.T) {
	b := bytes.NewBufferString("May the force be with you!")

	exp := 6
	res := count(b, false)

	if res != exp {
		t.Errorf("Expected %d words, got %d", exp, res)
	}
}

func TestCountLines(t *testing.T) {
	t.Run("count by words by default", func(t *testing.T) {
		b := bytes.NewBufferString("May the force\nbe with you.")

		exp := 6
		res := count(b, false)

		if res != exp {
			t.Errorf("Expected %d words, got %d", exp, res)
		}
	})

	t.Run("count by lines using -l command line flag", func(t *testing.T) {
		b := bytes.NewBufferString("May the force\nbe with you.")

		exp := 2
		res := count(b, true)

		if res != exp {
			t.Errorf("Expected %d lines, got %d", exp, res)
		}
	})
}
