(ns nubank.word-count
  (:require [clojure.string :refer [split]]))

#_
(defn word-count
  "Counts words in a string. Returns a map with each word as a key
   and their count as the value."
  [s]
  (let [words (split s #" ")]
    (loop [ws words
           acc {}]
      (if (empty? ws)
        acc
        (if (nil? (get acc (first ws)))
          (recur (rest ws)
                 (assoc acc (first ws) 1))
          (recur (rest ws)
                 (update acc (first ws) inc)))))))



#_
(defn word-count
  "Counts words in a string. Returns a map with each word as a key
   and their count as the value."
  [s]
  (let [words (split s #" ")]
    (loop [ws words
           acc {}]
      (if (empty? ws)
        acc
        (recur (rest ws)
               (if (nil? (get acc (first ws)))
                 (assoc acc (first ws) 1)
                 (update acc (first ws) inc)))))))

#_
(defn word-count
  "Counts words in a string. Returns a map with each word as a key
   and their count as the value."
  [s]
  (let [words (split s #" ")]
    (loop [ws words
           acc {}]
      (if (empty? ws)
        acc
        (recur (rest ws)
               (let [fw (first ws)]
                 (if (nil? (get acc fw))
                   (assoc acc fw 1)
                   (update acc fw inc))))))))




(defn word-count
  "Counts words in a string. Returns a map with each word as a key
   and their count as the value."
  [s]
  (if (empty? s)
    {}
    (let [words (split s #" ")]
      (loop [ws words
             acc {}]
        (if (empty? ws)
          acc
          (recur (rest ws)
                 (update acc (first ws) (fnil inc 0))))))))

(word-count "")
(split "" #" ")

(filter #(not-empty %) ["" ""])

(word-count "aa bb cc aa bb aa")
;;=> {"aa" 3, "bb" 2, "cc" 1}

(def f (fnil inc 10))

(f 0)
;;=> 1

(f nil)
;;=> 11

((fnil inc 10) nil)
