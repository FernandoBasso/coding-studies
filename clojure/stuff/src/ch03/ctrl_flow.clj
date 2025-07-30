(ns ctrl-flow)

;;
;; NOTE: Always try to think about what will be the result or outcome
;; for each snippet of code and then evaluate that snippet to check
;; Make sure to try to understand what is going on rather than just
;; mindlessly follow the examples.
;;

;;
;; Only nil and false are falsey. All else, inclusing 0 and "" are
;; truthy values.
;;

;;
;; if else
;;
(if 0
  "Yes"
  "No")

(if nil
  "Nil"
  "Non-nil")

;;
;; If does not require the else expr.
;;
(if true
  "Yes")

(if (not true)
  "Yes")

(if false
  "Yes")

(if nil
  "Yes")

;;
;; do to run multiple expressions.
;;

;;
;; Print a few things to STDOUT and return a string expr.
;;
(do
  (println 1)
  (println 2)
  (println "End")
  "1 2 End")

;;
;; when is like a combination of if and do.
;;
(when 'truthy
  (println 3)
  (println 2)
  (println 1)
  (println "Go!")
  "Success!")

;;
;; The nil? predicate.
;;
;; Unlike in Lisp, nil is not the same as the empty list '().
;;
(nil? nil)
(nil? 1)
(nil? '())
(nil? [])

;;
;; = for checking equality. Default equality operator for Clojure's
;; built-in data structures.
;;
(= 1 1)
(= 1 nil)
(= false (not 0))
(= -1 -2)

;;
;; or returns the first truthy value, or the last value (regardless
;; whether the last value is truthy or falsey).
;;
(or false nil 1 '())
(or nil false)
(or false nil)
(or (= 0 0) (= "yes" "no"))
(or (= 1 2) (= "yes" "no"))

;;
;; and returns the first falsey value, or if no values are falsey, the
;; last truthy value.
;;
(and nil false)
(and false nil)
(and '() 1 true "Yes!!!")
(and "Yes!!!" true 1 '())
