(ns ch04.e05-map)

;;;;
;; Map inc over a collection.
;;

;; List
(map inc '(1 2 3))
;;=> (2 3 4)

;; Vector
(map inc [1 2 3])
;;=> (2 3 4)

;; HashSet
(map inc #{1 2 3})
;;=> (2 4 3)

;; HashMap
(map #(inc (second %)) {:a 1 :b 2 :c 3})
;;=> (2 3 4)
;;
;; Remember that seq turns the map
;;
;;   {:a 1 :b 2 :c 3}
;;
;; into
;;
;;   ([:a 1] [:b 2] [:c 3])
;;;;

;;
;; If the function we pass to map takes two params, then we can
;; pass two collections.
;;
(map str ["Aayla" "Ahsoka" "Leia"] ["Secura" "Tano" "Organa"])
;;=> ("AaylaSecura" "AhsokaTano" "LeiaOrgana")

;;;;
;; And because str takes any number of arguments, even three
;; or more collections.
(map
 str
 ["Aayla" "Ahsoka" "Leia"]
 (repeat 3 " ")
 ["Secura" "Tano" "Organa"])
;;=> ("Aayla Secura" "Ahsoka Tano" "Leia Organa")
