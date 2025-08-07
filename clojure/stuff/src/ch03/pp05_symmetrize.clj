(ns ch03.pp05-symmetrize
  (:require [clojure.string :refer [replace]]))

(def
  left-parts
  "Represents the left- side of the body parts."
  [{:name "head" :size 4}
   {:name "left-eye" :size 1}
   {:name "left-ear" :size 2}])

(defn symmetryze-part
  "Symmetryze the body part to the given direction"
  [dir part]
  {:name (replace (:name part) "left-" (str dir "-"))
   :size (:size part)})

(symmetryze-part "right" (left-parts 2))
;;=> {:name "right-ear", :size 2}

(symmetryze-part "top" (left-parts 1))
;;=> {:name "top-eye", :size 1}

(defn symmetrize-parts
  "Symmetryze body parts to right and top."
  [asym-parts]
  (reduce (fn [sym-parts part]
            (into sym-parts
                  (set [part
                        (symmetryze-part "right" part)
                        (symmetryze-part "top" part)
                        (symmetryze-part "bottom" part)
                        (symmetryze-part "center" part)])))
            []
          asym-parts))

(symmetrize-parts left-parts)
;;=> [{:name "head", :size 4}
;;    {:name "left-eye", :size 1}
;;    {:name "right-eye", :size 1}
;;    {:name "bottom-eye", :size 1}
;;    {:name "center-eye", :size 1}
;;    {:name "top-eye", :size 1}
;;    {:name "center-ear", :size 2}
;;    {:name "right-ear", :size 2}
;;    {:name "top-ear", :size 2}
;;    {:name "bottom-ear", :size 2}
;;    {:name "left-ear", :size 2}]
