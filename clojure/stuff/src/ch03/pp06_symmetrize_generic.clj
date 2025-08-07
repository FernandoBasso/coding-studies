(ns ch03.pp06-symmetrize-generic
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
  [asym-parts directions]
  (reduce (fn [sym-parts part]
            (into sym-parts
                  (set [
                        (map (fn [d] (symmetryze-part d part)) directions)])))
            []
          asym-parts))

(symmetrize-parts left-parts ["right" "top" "bottom" "center"])


;;(map (fn [d] (symmetryze-part d (left-parts 1))) ["top" "bottom"])
;;=> ({:name "top-eye", :size 1} {:name "bottom-eye", :size 1})

(map
 (fn [f] (f 10))
 [identity inc dec])

(reduce (fn [res x]
          (into res (set [x (inc x)])))
        []
        [10 20 30])


(reduce (fn [res x]
          (into res (set [{:orig x :deced (dec x) :inced (inc x)}])))
        []
        [10 20 30])


(defn f [s]
  (replace s " " "-"))

(defn g [s]
  (replace s " " "_"))

(map f ["a b" "c d"])
(map g ["a b" "c d"])

(reduce
 (fn [res s]
   (into res (set [(f s) (g s)])))
 []
 ["a b" "c d"])

(reduce
 (fn [res s]
   (into res (set [(f s) (g s)])))
 []
 ["a b" "c d"])
