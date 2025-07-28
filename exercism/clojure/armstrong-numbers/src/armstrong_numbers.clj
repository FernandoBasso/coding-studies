;;;
;;; Check my notes and explanations on the solutions:
;;;
;;; • https://fernandobasso.gitlab.io/devnotes/Exercism/
;;;

(ns armstrong-numbers)

(defn pow
  "Raises the base b to the exponent e."
  [e b]
  (apply * (repeat e b)))

(defn to-digits
  "Returns a vector of each digit in num in reverse order."
  [num]
  (->> num
       (iterate #(quot % 10))
       (take-while pos?)
       (map #(rem % 10))))

(defn armstrong?
  [num]
  (let [digits (to-digits num)]
    (->> digits
         (map (partial pow (count digits)))
         (apply +)
         (= num))))
