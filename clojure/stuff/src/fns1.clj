(ns fns1)

(val (first {:x 1 :y 2}))
;;=> 1

(key (first (rest {:x 10 :y 2})))
;;=> :y
