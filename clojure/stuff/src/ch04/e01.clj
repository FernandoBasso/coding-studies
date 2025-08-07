;;;
;;; tags: map sequence collection
;;;

(ns ch04.e01)

(defn titlefy
  "Returns a common title for the given topic"
  [topic]
  (str topic " for The Pure of Heart!"))

;;;;
;; map works with vectors.
;;
(map titlefy ["Lisp", "Clojure", "FP"])
;;=> ("Lisp for The Pure of Heart!"
;;=>  "Clojure for The Pure of Heart!"
;;=>  "FP for The Pure of Heart!")

;;;;
;; map works with lists.
;;
(map titlefy '("Lisp", "Clojure", "FP"))
;;=> ("Lisp for The Pure of Heart!"
;;=>  "Clojure for The Pure of Heart!"
;;=>  "FP for The Pure of Heart!")


;;;;
;; map works with unsorted sets.
;;
(map titlefy #{"Lisp", "Clojure", "FP"})
;;=> ("Lisp for The Pure of Heart!"
;;=>  "Clojure for The Pure of Heart!"
;;=>  "FP for The Pure of Heart!")

;;;;
;; map works with maps. Just make sure to get the value, and
;; not the key.
;;
(map
 #(titlefy (second %))
 {:lisp "Lisp"
  :clojure "Clojure"
  :fp "FP"})
;;=> ("Lisp for The Pure of Heart!"
;;=>  "Clojure for The Pure of Heart!"
;;=>  "FP for The Pure of Heart!")

;;
;; Note how for different input data types for map always return
;; values of the list data type '().
;;
