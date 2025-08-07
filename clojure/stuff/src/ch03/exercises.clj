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
(def yoda {:id 1, :name "Yoda" :skill "The Force"})
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


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; 3 dec maker
;;
(defn dec-maker
  "Returns a function that decrements the given number by n."
  [n]
  (fn [x] (- x n)))

(def dec1 (dec-maker 1))
(dec1 10)
;;=> 9

(def dec25 (dec-maker 25))
(dec25 100)
;;=> 75

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; 4 mapset
;;
(defn mapset
  "Maps f over the values xs and and dedups values."
  [f xs]
  (loop [res #{} ys xs]
    (if (empty? ys)
      res
      (recur
       (conj res (f (first ys)))
       (rest ys)))))

(mapset inc [1 1 1])
;;=> #{2}

(mapset dec [20 20 10 10])
;;=> #{19 9}

(mapset #(- % 5) [105 5 105 5])
;;=> #{0 100}

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; 5 symmetryze alien
;;
(def
  left-part
  "Represents the left- side of the body parts."
  [{:name "head" :size 4}
   {:name "left-eye" :size 1}
   {:name "left-ear" :size 2}])

(defn symmetryze-part
  "Symmetryze the body part to the given direction"
  [dir part]
  {:name (replace (:name part) "left-" (str dir "-"))
   :size (:size part)})

(symmetryze-part "right" (left-part 2))
;;=> {:name "right-ear", :size 2}

(symmetryze-part "top" (left-part 1))
;;=> {:name "top-eye", :size 1}

(defn symmetrize-parts
  "Symmetryze body parts to right and top."
  [asym-parts]
  (reduce (fn [sym-parts part]
            (into sym-parts
                  (set [part
                        (symmetryze-part "right" part)
                        (symmetryze-part "top" part)
                        (symmetryze-part "bottom" part)
                        (symmetryze-part "center" part)])))
            []
          asym-parts))

(symmetrize-parts left-part)
;;=> [{:name "head", :size 4}
;;    {:name "left-eye", :size 1}
;;    {:name "right-eye", :size 1}
;;    {:name "bottom-eye", :size 1}
;;    {:name "center-eye", :size 1}
;;    {:name "top-eye", :size 1}
;;    {:name "center-ear", :size 2}
;;    {:name "right-ear", :size 2}
;;    {:name "top-ear", :size 2}
;;    {:name "bottom-ear", :size 2}
;;    {:name "left-ear", :size 2}]
