(ns nubank.spec
  (:require [clojure.spec.alpha :as s]
            [nubank.money :as money]))

(s/def :money/amount int?)
(s/def :currency/divisor int?)
(s/def :currency/symbol (s/nilable string?))
(s/def :currency/desc (s/nilable string?))
(s/def :currency/code (and string? #{"USD" "UKG" "BRL"}))

(s/def :finance/currency (s/keys :req-un [:currency/divisor
                                          :currency/code]
                                 :opt-un [:currency/symbol
                                          :currency/desc]))

(s/valid? :finance/currency (:brl money/currencies))
;;=> true

(map #(s/valid? :finance/currency %) (vals money/currencies))
;;=> (true true true)

(s/def :finance/money (s/keys :req-un [:money/amount
                                       :finance/currency]))
(s/valid?
 :finance/money
 (money/make-money 1200 (:brl money/currencies)))
;;=> true

;;
;; There is a temptation to put this kind of validation into the domain
;; operations themselves, but resist this temptation. The best places
;; for validations are at the boundaries of the system, and between
;; systems that are passing data to one another.
;;
;; Entity validation, or contract validation, are relatively expensive
;; operations within our data processing. Thus, we recommend its usage
;; only where they're strictly necessary.
;;
;; When dealing with data inside our domain, we can always validate it
;; through unit or integration tests. At our system boundaries we can
;; use the contract validation to avoid undesired changes to our
;; data consumers.
;;
