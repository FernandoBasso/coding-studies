(ns nubank.ops1)

;;;
;;; In OOP, constructors tend to be static member functions
;;; encapsulated by the class. In Clojure, we don't build classes,
;;; so we create stand-alone functions that serve the same purpose.
;;;
;;; If you're using defrecord, you get some basic build operations for
;;; free, such as ->EntityName. We refer to those as factory functions,
;;; not constructors.
;;;

; Currency
(def currency-usd {:divisor 100
                   :code "USD"})

; currencies are likely to be reused, so let's make a reference list ʛ
(def currencies {:usd {:divisor 100 :code "USD" :symbol "$"
                       :desc "US Dollars"}
                 :brl {:divisor 100 :code "BRL" :symbol "R$"
                       :desc "Brazilian Real"}
                 :ukg {:divisor (* 17 29) :code "UKG" :symbol "ʛ"
                       :desc "Galleons of the United Kingdom"}})

; Money (specifically, $12.00 USD)
(def money-in-usd {:amount 1200
                   :currency :usd})

; a Transaction
(def transaction-in-usd {:transaction-type :debit
                         :account-id       "12345-01"
                         :details          {}
                         :timestamp        1654530232597
                         :amount           {:amount   1200
                                            :currency :usd}})

(defn make-money
  "Creates a Money entity"
  [amount currency]
  {:amount amount
   :currency currency})

(make-money 12 :usd)
