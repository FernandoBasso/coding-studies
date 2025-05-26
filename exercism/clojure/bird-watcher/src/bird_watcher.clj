(ns bird-watcher)

(def last-week
  "last-week :: Vector<Integer>

  Returns the last week's count of bird visits per day. The order of
  the elements are from the oldest to the newest. For example, the
  count for the first day is the first element and today's (the most
  recent day) is the last element."
  [0 2 5 3 7 8 4])

(defn today [birds]
  "today :: Integer

  Returns today's count of birds."
  (peek birds))

(defn inc-bird [birds]
  "inc-bird :: Vector<Integer> -> Vector<Integer>

  Returns a new collection with today's count incremented by one."
  (update birds (- (count birds) 1) inc))

(defn day-without-birds? [birds]
  "day-without-birds? :: [Integer] -> Boolean

  Returns true if there is a day without visits; false otherwise."
  (not (every? pos? birds)))

(defn n-days-count [birds n]
  "n-days-count :: (Vector<Integer>, Integer) -> Integer

  Returns the count of visits fir the first n days."
  (reduce + 0 (take n birds)))

(defn busy-days [birds]
  "busy-days :: Vector<Integer> -> Integer

  Returns the count of days that had five or more visits."
  (count (filter #(>= % 5) birds)))

(defn odd-week? [birds]
  "odd-week? :: Vector<Integer> -> Boolean

  Returns true if the odd pattern of 1's and 0's occur for the entire
  week; false otherwise.

  - T.C.: O(n). The vector is iterated through at most once.
  - S.C.: O(n). Idem."
  (cond
    (= (count birds) 1) true
    (false? (every? #(or (= % 0) (= % 1)) (take 2 birds))) false
    (not= (first birds) (second birds)) (odd-week? (rest birds))
    :else false))
