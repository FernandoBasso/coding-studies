(ns ch03.pp01-fns)

;;;;
;; str
;;
(str "one as " 0)
;;=> "one as 0"

;;;;
;; vector
;;
(vector)
;;=> []

;;;;
;; list. Note we _prepend_ 3 to the list.
;;
(conj '(1 2) 3)
;;=> (3 1 2)

;;;;
;; hash-map
;;
(def yoda {:id 1, :name "Yoda" :skill "The Force"})
(str (:name yoda) "'s skill is " (:skill yoda) ".")
;;=> "Yoda's skill is The Force."

;;;;
;; hash-set
;;
(def uniq (hash-set 1 1 :nodups :nodups))
uniq
;;=> #{1 :nodups}
