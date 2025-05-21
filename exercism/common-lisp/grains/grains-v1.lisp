:(defpackage :grains
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
  (labels
    ((run (i acc)
       (if (= i n)
         acc
         (run
           (+ i 1)
           (* acc 2)))))
    (run 1 1)))

;;;;
;; total :: Integer
;;
;; Returns the total number of grains on a board of *board-size* squares.
;;
(defun total ()
  (labels
    ((run (i acc sum)
       (if (= i *board-size*)
         sum
         (run
           (+ i 1)
           (* acc 2)
           (+ sum (* acc 2))))))
    (run 1 1 1)))

;;
;; References:
;;
;; · https://stackoverflow.com/questions/19535023/helper-nested-functions-in-cl
;;
