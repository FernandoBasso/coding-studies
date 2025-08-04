(ns sets)

(def hs #{1 2 3 5 7 9})

(get hs 4)
;=> nil

(get hs 7)
;=> 7


(def names #{"Aayla" "Ahsoka"})

(names "Leia")
;=> nil

(names "Aayla")
;=> "Aayla"

(def ks #{:force :power :level})

(:points ks)
;=> nil

(:power ks)
;=> :power
