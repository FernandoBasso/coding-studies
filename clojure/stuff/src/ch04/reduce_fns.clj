(ns ch04.reduce-fns)

(reduce + [])
;;=> 0

(reduce + 10 [2 3 5])
;;=> 20

(reduce * [])
;;=> 1

(reduce * 10 [2 3 5])
;;=> 300

