;;;
;;; My explanations and notes on the solutions:
;;;
;;; · https://fernandobasso.dev/devhowto/exercism/intro
;;;

(ns bird-watcher)

(def last-week
  "last-week :: [Integer]"
  [0 2 5 3 7 8 4])

(defn today
  "today :: Victor<Integer>"
  [birds]
  (peek birds))

(defn inc-bird
  "inc-bird :: Vector<Integer> -> Vector<Integer>"
  [birds]
  (update birds (- (count birds) 1) inc))

(defn day-without-birds?
  "day-without-birds? :: Vector<Integer> -> Boolean"
  [birds]
  (not (every? pos? birds)))

(defn n-days-count
  "n-days-count :: (Vector<Integer>, Integer) -> Integer"
  [birds n]
  (reduce + 0 (take n birds)))

(defn busy-days
  "busy-days :: Vector<Integer> -> Integer"
  [birds]
  (count (filter #(>= % 5) birds)))

(defn odd-week?
  "odd-week? :: Vector<Integer> -> Boolean"
  [birds]
  (cond
    (= (count birds) 1) true
    (false? (every? #(or (= % 0) (= % 1)) (take 2 birds))) false
    (not= (first birds) (second birds)) (odd-week? (rest birds))
    :else false))

