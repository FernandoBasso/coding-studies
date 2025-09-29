(ns dedup-consecutive.dedup-v2)

(defn dedup
  "De-duplicates consecutive identical elements."
  [xs]
  (loop [remaining-xs xs
         deduped-xs   []
         last-seen-x  nil]
    (if (empty? remaining-xs)
      deduped-xs
      (recur (rest remaining-xs)
             (if (= (first remaining-xs) last-seen-x)
               deduped-xs
               (conj deduped-xs (first remaining-xs)))
             (first remaining-xs)))))
