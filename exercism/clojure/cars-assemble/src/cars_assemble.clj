;;;
;;; Check my notes and explanations on the solutions:
;;;
;;; • https://fernandobasso.gitlab.io/devnotes/Exercism/
;;;

(ns cars-assemble)

(defn production-rate
  "Returns the assembly line's production rate per hour,
   taking into account its success rate."
  [speed]
  (let [total (* 221.0 speed)]
    (cond
      (<= speed 4) (double total)
      (and (>= speed 5) (<= speed 8)) (double (* 0.9 total))
      (= speed 9) (double (* 0.8 total))
      :else (* 0.77 (double total)))))

(defn working-items
  "Calculates how many working cars are produced per minute"
  [speed]
  (int (/ (production-rate speed) 60)))
