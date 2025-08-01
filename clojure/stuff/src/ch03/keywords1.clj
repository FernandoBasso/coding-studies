(ns kw1)

(def jedi
  {:name
   {:first "Aayla"
    :last "Secura"}
   :skill "Lightsaber"})

;;;;
;; Keywords can be used as a function to look up the corresponding value
;; in a data structure.
;;
(:name jedi)
;=> {:first "Aayla", :last "Secura"}

;;;;
;; And it works with nested maps as well.
;;
(:first (:name jedi))
;=> "Aayla"

;;;;
;; And default values work too.
;;
(:power jedi 99)
;=> 99

;;;;
;; Our jedi defined above does not have a middle name key in the map,
;; but we can provide default values for nested maps as well.
;;
(:middle (:name jedi) "L.")
;=> "L."
