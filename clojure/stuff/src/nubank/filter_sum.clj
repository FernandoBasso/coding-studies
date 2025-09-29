(ns nubank.filter-sum)


(defn filter-sum
  "Filters numbers that match the predicate f and returns their sum."
  [f xs]
  ((comp (partial apply +)
         (partial filter f)) xs))

(filter-sum even? [1 2 3 4 5])
;;=> 6

(filter-sum odd? [1 2 3 4 5])
;;=> 4

(filter-sum #(<= % 2) [1 2 3 4 5])
;;=> 3
