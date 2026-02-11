package main

import (
	"bytes"
	"testing"
)

func TestCount(t *testing.T) {
	t.Run("can count by words", func(t *testing.T) {
		buf := bytes.NewBufferString("May the force be with you.")

		want := 6
		got := Count(buf, false, false)

		if want != got {
			t.Errorf("Want %d words, got %d", want, got)
		}
	})

	t.Run("can count by lines", func(t *testing.T) {
		buf := bytes.NewBufferString("May the force\nbe with you.")

		want := 2
		got := Count(buf, true, false)

		if want != got {
			t.Errorf("Want %d lines, got %d", want, got)
		}
	})

	t.Run("can count by bytes", func(t *testing.T) {
		buf := bytes.NewBufferString("Master Yoda")

		want := 11
		got := Count(buf, false, true)

		if want != got {
			t.Errorf("Want %d bytes, got %d", want, got)
		}
	})

	t.Run("count by bytes takes precedence over by lines", func(t *testing.T) {
		buf := bytes.NewBufferString("Master Yoda")

		want := 11
		got := Count(buf, true, true)

		if want != got {
			t.Errorf("Want %d bytes, got %d", want, got)
		}
	})
}
