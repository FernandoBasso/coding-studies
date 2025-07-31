(ns data-structures)

;;
;; Maps are like dictionary or hash tables in other langs.
;;

;;
;; An empty map.
;;
(def m1 {})

;;
;; Use :keyword as the key, and the strings as values.
;;
(def jedi {:first-name "Ahsoka" :last-name "Tano"})

(def ops {:add +
          :sub -})

;;
;; We can use the map as a function and the key as the getter
;; for the associated value.
;;
((ops :add) 1 2)
((ops :sub) 3 2)

;

;;
;; Can use strings as keys as well.
;;
(def drinks {"apple" "juice" "orange" "cream"})
(drinks "apple")
(drinks "orange")
(drinks "cream")

(def nums {1 "one" "two" 2})
(nums 1)
(nums "two")

(def aayla
  {:name
   {:first "Aayla"
    :last "Secura"}
   :skill "Light saber"
   :power 100})
(aayla :name)
((aayla :name) :last)

