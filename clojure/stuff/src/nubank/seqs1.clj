(ns nubank.seqs1)

(def xs (range 1 11))

(every? int? xs)
;;=> true

(every? float? xs)
;;=> false

(every? even? xs)
;;=> false

(every? odd? xs)
;;=> false

(some even? xs)
;;=> true

(some odd? xs)
;;=> true

(not-any? #(< % 1) xs)
;;=> true

(not-any? #(> % 10) xs)
;;=> true

(not-any? #(= 9 %) xs)
;;=> false

;;;;
;; 5 is the first int in xs that exists in the set #{7 5 9}.
;;
(some #{7 5 9} xs)
;;=> 5

;;
;; TODO: Research on some, some? every? all? any?
;;

(filter int? xs)
;;=> (1 2 3 4 5 6 7 8 9 10)

(filter float? xs)
;;=> ()

(filter odd? xs)
;;=> (1 3 5 7 9)

(filter #(< % 1) xs)
;;=> ()

(filter #(> % 10) xs)
;;=> ()

;;;;
;; Between 4 and 7 (both inclusive).
;;
(filter #(and (>= % 4) (<= % 7)) xs)
;;=> (4 5 6 7)

(filter #(= % 7) xs)
;;=> (7)

;;
;; There is also take, drop, etc.
;;

;;;;
;; Square each element.
;;
(map #(* % %) xs)
;;=> (1 4 9 16 25 36 49 64 81 100)
