(ns vec1)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Vectors
;;


;;;;
;; A vector literal.
;;
(def v1 [30 20 10])

;;;;
;; As with maps, we can use get to retrieve elements. Get the element at
;; index 0.
;;
(get v1 0)
;=> 30

;;;;
;; Unlike :keywords as functions with maps, we cannot use the index as a
;; function to access an element. That is, this DOES NOT work.
;;
;(0 v1)
;~ class java.lang.Long cannot be cast to class clojure.lang.IFn



;;;;
;; Vectors can contain elements of different types (we can mix types in
;; the same vector).
;;
(def v2 [900 {:name "Yoda"} "The Force"])
(get v2 1)
;=> {:name "Yoda"}

;;;;
;; First return the map with the :name key, and then use :name keyword
;; as fn to retrieve its the name string value.
;;
(:name (get v2 1))
;=> "Yoda"


;;;;
;; conj to append an element to a vector (O(1) time complexity).
;;
(def xs [10 20 30])
(conj xs 40)
;=> [10 20 30 40]

;;;;
;; But note that the original xs is unchanged. xs is still [10 20
;; 30]. Remember: Clojure data structures are immutable. Bind to a new
;; name if the results need to be persisted for further access.
;;
(def ys (conj xs 40))
; ys is [10 20 30 40]


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Prepend to a vector.
;;

;;;;
;; Using apply vector.
;;
(def xs [20 30 40])
(apply vector 10 v)
;=> [10 20 30 40]

;;;;
;; Using into.
;;
(into [10] v)
;=> [10 20 30 40]
