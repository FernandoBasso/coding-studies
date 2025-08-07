(ns ch03.pp03-dec-maker)

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
