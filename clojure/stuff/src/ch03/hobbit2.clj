(ns hobbit2
  (:require [clojure.string :refer [replace]]))

;;;;
;; Note there are no right- body parts in this map.
;;
(def asym-hobbit-body-parts [{:name "head" :size 3}
                             {:name "left-eye" :size 1}
                             {:name "left-ear" :size 1}
                             {:name "mouth" :size 1}
                             {:name "nose" :size 1}
                             {:name "neck" :size 2}
                             {:name "left-shoulder" :size 3}
                             {:name "left-upper-arm" :size 3}
                             {:name "chest" :size 10}
                             {:name "back" :size 10}
                             {:name "left-forearm" :size 3}
                             {:name "abdomen" :size 6}
                             {:name "left-kidney" :size 1}
                             {:name "left-hand" :size 2}
                             {:name "left-knee" :size 2}
                             {:name "left-thigh" :size 4}
                             {:name "left-lower-leg" :size 3}
                             {:name "left-achilles" :size 1}
                             {:name "left-foot" :size 2}])

(defn matching-part
  "Turns a left- body part into a right- one."
  [part]
  {:name (replace (:name part) #"left-" "right-")
   :size (:size part)})

(matching-part (asym-hobbit-body-parts 10))
;=> {:name "right-forearm", :size 3}

(defn symmetryze-body-parts
  "Adds the right- body parts for each left- one. Expects a seq of maps
  that have a :name and a :size."
  [asym-body-parts]
  (reduce (fn [final-body-parts part]
            (into final-body-parts
                  (set [part (matching-part part)])))
          []
          asym-body-parts))

(symetryze-body-parts asym-hobbit-body-parts)
;; [{:name "head", :size 3}
;;  {:name "left-eye", :size 1}
;;  {:name "right-eye", :size 1}
;;  {:name "left-ear", :size 1}
;;  {:name "right-ear", :size 1}
;;  {:name "mouth", :size 1}
;;  {:name "nose", :size 1}
;;  {:name "neck", :size 2}
;;  {:name "left-shoulder", :size 3}
;;  {:name "right-shoulder", :size 3}
;;  {:name "right-upper-arm", :size 3}
;;  {:name "left-upper-arm", :size 3}
;;  {:name "chest", :size 10}
;;  {:name "back", :size 10}
;;  {:name "left-forearm", :size 3}
;;  {:name "right-forearm", :size 3}
;;  {:name "abdomen", :size 6}
;;  {:name "left-kidney", :size 1}
;;  {:name "right-kidney", :size 1}
;;  {:name "left-hand", :size 2}
;;  {:name "right-hand", :size 2}
;;  {:name "right-knee", :size 2}
;;  {:name "left-knee", :size 2}
;;  {:name "right-thigh", :size 4}
;;  {:name "left-thigh", :size 4}
;;  {:name "right-lower-leg", :size 3}
;;  {:name "left-lower-leg", :size 3}
;;  {:name "right-achilles", :size 1}
;;  {:name "left-achilles", :size 1}
;;  {:name "right-foot", :size 2}
;;  {:name "left-foot", :size 2}]

(defn hit
  "Determines which body part is hit."
  [asym-body-parts]
  (let [sym-parts (symetryze-body-parts asym-body-parts)
        body-part-size-sum (reduce + (map :size sym-parts))
        target (rand body-part-size-sum)]
    (loop [[part & remaining-parts] sym-parts
           accumulated-size (:size part)]
      (if (> accumulated-size target)
        part
        (recur
         remaining-parts
         (+ accumulated-size (:size (first remaining-parts))))))))


(hit asym-hobbit-body-parts)
;=> {:name "left-forearm", :size 3}

(hit asym-hobbit-body-parts)
;=> {:name "abdomen", :size 6}
