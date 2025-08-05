(ns recursion1)

(defn countdown
  "Prints from ini down to 1 then Go!, each on its line."
  [n]
  (println n)
  (if (= n 0)
    (println "Go!")
    (countdown (dec n))))

(countdown 3)
;; 3
;; 2
;; 1
;; Go!
;;;;
