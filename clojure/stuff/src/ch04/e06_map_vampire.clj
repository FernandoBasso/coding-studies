(ns ch04.e06-map-vampire)

(defn unify-diet-data
  "Returns a hash-map of matching values of collections."
  [human-consumption critter-consumption]
  {:human human-consumption
   :critter critter-consumption})

(map
 unify-diet-data
 [8.1 7.3 6.6 5.0]
 [0.0 0.2 0.3 1.1])
;;=> ({:human 8.1, :critter 0.0}
;;    {:human 7.3, :critter 0.2}
;;    {:human 6.6, :critter 0.3}
;;    {:human 5.0, :critter 1.1})
