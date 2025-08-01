(ns fns)

(def m {:x 1})

(+ (m :x) (m :y))
; Cannot invoke "Object.getClass()" because "x" is null

(def jedi
  {:name
   {:first "Asoka"
    :last "Tano"}
   :skill "The Force"
   :power 100})

(get-in jedi [:name :firt])
;=> nil

