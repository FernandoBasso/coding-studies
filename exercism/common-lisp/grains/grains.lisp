(defpackage :grains
  (:use :cl)
  (:export :square :total))
(in-package :grains)

(defparameter *board-size* 64)

;;;;
;; square :: Integer -> Integer
;;
;; Returns the amount of grains on a given square.
;;
(defun square (n)
  (expt 2 (- n 1)))

;;;;
;; total :: Integer
;;
;; Returns the total number of grains on a board of *board-size* squares.
;;
(defun total ()
  (- (expt 2 *board-size*) 1))

