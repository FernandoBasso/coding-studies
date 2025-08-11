(ns ch04.map-stat)

(def sum #(reduce + %))

(def avg #(/ (sum %) (count %)))

(defn stats
  "Returns a collection with the count of the elements, their
   sum, and the average."
  [vals]
  (map #(% vals) [count sum avg]))

(stats [5 4 1 9 5 8 3 9])
;;=> (8 44 11/2)
;;
;; 8 elements, their sum is 44, and their average is 11/2.
;;;;

(stats [7])
;;=> (1 7 7)
;;
;; 1 element, sum to 7, and the average is 7.
;;;;
