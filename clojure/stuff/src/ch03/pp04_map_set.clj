(ns ch03.pp04-map-set)

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
