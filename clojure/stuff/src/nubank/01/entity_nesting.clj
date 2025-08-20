(ns nubank.01.entity-nesting)

(def customer-1
  {:id "12345"
   :first-name "Jane"
   :last-name "Doe"})

(def account-1
  {:id "12345-01"
   :type :checking})

(def currency-USD
  {:divisor 100
   :code "USD"})

(def currency-BRL
  {:divisor 100
   :code "BRL"})

(def currencies
  {:usd currency-USD
   :brl currency-BRL})

(def amount-1
  {:amount 1200
   :currency :usd})

(def tarnsaction-1
  {:type :debit
   :details {}
   :account-id "12345-01"
   :timestamp 1654530232597
   :amount amount-1})

;;;;
;; Customer nesting two accounts. The goal here is to view the customers
;; relationship with their own account. The customer is more important
;; in this view.
;;
(def customer-1
  {:customer-id 12345
   :first-name  "Maria"
   :last-name   "da Silva"
   :accounts    [{:account-id   "111-222-333"
                  :account-type :checking}
                 {:account-id   "111-222-335"
                  :account-type :credit}]})


;;;;
;; But if the important thing is the account, we can do something like
;; this instead.
;;
(def jane-account
  {:account-id   "111-222-333"
   :account-type :checking
   :customer     {:customer-id 12345
                  :first-name  "Jane"
                  :last-name   "Doe"}})
