;;;
;;; Exercises from chapter 3.
;;;

(ns ch03.exercises
  (:require [clojure.string :refer [join replace split]]))

;;;;
;; 1 str
;;
(str "one as " 1)
;=> "one as 1"

;;;;
;; 1 vector
;;
(vector)
;=> []

;;;;
;; 1 list. Note we _prepend_ 3 to the list.
;;
(conj '(1 2) 3)
;=> (3 1 2)

;;;;
;; 1 hash-map
;;
(def yoda { :id 1, :name "Yoda" :skill "The Force"})
(str (:name yoda) "'s skill is " (:skill yoda) ".")
;=> "Yoda's skill is The Force."

;;;;
;; 1 hash-set
;;
(def uniq (hash-set 1 1 :nodups :nodups))
uniq
;=> #{1 :nodups}



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; 2 add 100
;;
(defn add100
  "Add 100 to the number given."
  [x]
  (+ x 100))

(add100 0)
;=> 100

(add100 -100)
;=> 0;

(add100 1)
;=> 101

