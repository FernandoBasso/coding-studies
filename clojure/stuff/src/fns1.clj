(ns fns)

(def jedi
  {:name
   {
    :first "Aayla"
    :last "Secura"}
   :skill "Lightsaber"
   :power 100})

(jedi :name)
;=> {:first "Aayla", :last "Secura"}

(jedi :skill)
;=> "Lightsaber"

(jedi :power)
;=> 100

(def m {1 "one" "two" 2 :three 'three 'four :four})

(m 1)
;=> "one"
; The key 1 maps to the string "one".

(m "two")
;=> 2
; The key "two" maks to the number 2.

(m :three)
;=> three
; The key :three maps to the symbol 'three (which prints
; as simply three, not 'three).

(m 'four)
;=> :four
; The symbol 'four maps to the keyword :four.

(def ops {:add + :sub -})

((ops :add) 1 2)
;=> 3

((get ops :sub) 5 3)
;=> 2


