(ns p1)

(defn make-inc-by
 "Returns a function that increments a number by n."
 [by]
 #(+ % by))

(def inc-by-10 (make-inc-by 10))
(inc-by-10 11)
;=> 21

(def dec-by-10 (make-inc-by -10))
(dec-by-10 11)
;=> 1
