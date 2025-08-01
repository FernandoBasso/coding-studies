;;;
;;; tags: map collection
;;;

(ns maps1)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Nested maps.
;;;

(def jedi
  {:name
   {
    :first "Aayla"
    :last "Secura"}
   :skill "Lightsaber"
   :power 100})

(jedi :name)
;=> {:first "Aayla", :last "Secura"}

(jedi :skill)
;=> "Lightsaber"

(jedi :power)
;=> 100

;;;;
;; Because :name returns the nested map, we can retrieve that, and from
;; that retrieve :first and :last.
;;
((jedi :name) :first)
;=> "Aayla"

((get jedi :name) :last)
;=> "Secura"

;;;;
;; Using the get-in function.
;;
(get-in jedi [:name :first])
;=> "Aayla"

(get-in jedi [:name :last])
;=> "Secura"



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Types that can be used as keys.
;;

(def m {1 "one" "two" 2 :three 'three 'four :four})

;;;;
;; The key 1 maps to the string "one".
;;
(m 1)
;=> "one"

;;;;
;; The key "two" maks to the number 2.
;;
(m "two")
;=> 2

;;;;
;; The key :three maps to the symbol 'three (which prints as simply
;; three, not 'three).
;;
(m :three)
;=> three

;;;;
;; The symbol 'four maps to the keyword :four.
;;
(m 'four)
;=> :four

;;;;
;; Map some keywords to the + and - functions.
;;
(def ops {:add + :sub -})

;;;;
;; (ops :add) returns +, so it becomes (+ 1 2), and finally 3.
;;
((ops :add) 1 2)
;=> 3

;;;;
;; (ops :sub) returns -, so it becomes (- 5 3), and finally 2.
;;
((get ops :sub) 5 3)
;=> 2


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Missing keys and nil
;;

;;;;
;; A key that does not exist DOES NOT produce an error, but simply
;; returns nil.
;;
(def m {:x 1})

(m :x)
;=> 1

(m :y)
;=> nil

(get m :x)
;=> 1

(get m :y)
;=> nil


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Default values for missing keys
;;

;;;;
;; The m map defined earlier does not have an :y key. Let's make it
;; return 2 as default instead of nil.
;;
(get m :y 2)
;=> 2

;;;;
;; Or with the map itself acting as a function.
;;
(m :y 2)
;=> 2

(+ (m :x) (m :y))


(+ (m :x) (m :y 2))
;=> 3
