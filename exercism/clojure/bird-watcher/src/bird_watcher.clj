;;;
;;; My explanations and notes on the solutions:
;;;
;;; · https://fernandobasso.dev/devhowto/exercism/intro
;;;

(ns bird-watcher)

(def last-week
  "last-week :: [Integer]"
  [0 2 5 3 7 8 4])

(defn today [birds]
  "today :: Victor<Integer>"
  (peek birds))

(defn inc-bird [birds]
  "inc-bird :: Vector<Integer> -> Vector<Integer>"
  (update birds (- (count birds) 1) inc))

(defn day-without-birds? [birds]
  "day-without-birds? :: Vector<Integer> -> Boolean"
  (not (every? pos? birds)))

(defn n-days-count [birds n]
  "n-days-count :: (Vector<Integer>, Integer) -> Integer"
  (reduce + 0 (take n birds)))

(defn busy-days [birds]
  "busy-days :: Vector<Integer> -> Integer"
  (count (filter #(>= % 5) birds)))


(defn odd-week? [birds]
  "odd-week? :: Vector<Integer> -> Boolean"
  (cond
    (= (count birds) 1) true
    (false? (every? #(or (= % 0) (= % 1)) (take 2 birds))) false
    (not= (first birds) (second birds)) (odd-week? (rest birds))
    :else false))

