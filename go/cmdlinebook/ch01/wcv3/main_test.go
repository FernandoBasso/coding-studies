package main

import (
	"bytes"
	"testing"
)

func TestCountWords(t *testing.T) {
	buf := bytes.NewBufferString("May the force be with you!")

	exp := 6
	res := count(buf, false, false)

	if res != exp {
		t.Errorf("Expected %d words, got %d", exp, res)
	}
}

func TestCountLines(t *testing.T) {
	t.Run("count by words by default", func(t *testing.T) {
		buf := bytes.NewBufferString("May the force\nbe with you.")

		exp := 6
		res := count(buf, false, false)

		if res != exp {
			t.Errorf("Expected %d words, got %d", exp, res)
		}
	})

	t.Run("count by lines using -l command line flag", func(t *testing.T) {
		buf := bytes.NewBufferString("May the force\nbe with you.")

		exp := 2
		res := count(buf, true, false)

		if res != exp {
			t.Errorf("Expected %d lines, got %d", exp, res)
		}
	})

	t.Run("count by bytes if -b flag is present", func(t *testing.T) {
		buf := bytes.NewBufferString("Hello!")

		exp := 6
		res := count(buf, false, true)

		if res != exp {
			t.Errorf("Expected %d bytes, got %d", exp, res)
		}
	})

	t.Run("-b overrides -l and counts by bytes, not lines", func(t *testing.T) {
		buf := bytes.NewBufferString("a\nb")

		exp := 3
		res := count(buf, true, true)

		if res != exp {
			t.Errorf("Expected %d bytes, not %d lines", exp, res)
		}
	})
}
