(ns ch03.pp02-add100)

(defn add100
  "Add 100 to the number given."
  [x]
  (+ x 100))

(add100 0)
;;=> 100

(add100 -100)
;;=> 0;

(add100 1)
;;=> 101
