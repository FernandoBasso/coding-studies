;;;
;;; Check my notes and explanations on the solutions:
;;;
;;; • https://fernandobasso.gitlab.io/devnotes/Exercism/
;;;

(ns cars-assemble)

(defn success-rate
  "success-rate :: Long -> Double

   Returns the success rate based on the speed."
  [speed]
  (cond
    (<= speed 4) 1.0
    (<= speed 8) 0.9
    (<= speed 9) 0.8
    :else 0.77))

(defn production-rate
  "success-rate :: Long -> Double

   Returns the assembly line's production rate per hour, taking into
   account its success rate."
  [speed]
  (let [total (* 221.0 speed)]
    (* (success-rate speed) total)))

(defn working-items
  "working-items :: Long -> Integer

   Calculates how many working cars are produced per minute"
  [speed]
  (int (/ (production-rate speed) 60)))
