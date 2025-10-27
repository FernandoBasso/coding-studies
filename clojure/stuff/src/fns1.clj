(ns fns1)

(val (first {:x 1 :y 2}))
;;=> 1

(key (first (rest {:x 10 :y 2})))
;;=> :y

(defn my-add
  "Adds two numbers together."
  [x y]
  (+ x y))

(my-add 1 1)
