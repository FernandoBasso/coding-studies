;;;
;;; Exercises from chapter 3.
;;;

(ns ex)

;;;;
;; 1 str
;;
(str "one as " 1)
;=> "one as 1"

;;;;
;; 1 vector
;;
(vector)
;=> []

;;;;
;; 1 list. Note we _prepend_ 3 to the list.
;;
(conj '(1 2) 3)
;=> (3 1 2)

;;;;
;; 1 hash-map
;;
(def yoda { :id 1, :name "Yoda" :skill "The Force"})
(str (:name yoda) "'s skill is " (:skill yoda) ".")
;=> "Yoda's skill is The Force."

;;;;
;; 1 hash-set
;;
(def uniq (hash-set 1 1 :nodups :nodups))
uniq
;=> #{1 :nodups}
