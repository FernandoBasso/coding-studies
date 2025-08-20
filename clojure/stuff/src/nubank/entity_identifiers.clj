(ns nubank.entity-identifiers)

;;;;
;; Customers reference zero or more accounts.
;;
(def customers-1
  {
   12345 {:customer-id 12345
          :first-name  "Jane"
          :last-name   "Doe"
          :accounts    ["12345-01"
                        "12345-02"]}
   12346 {:customer-id 12346
          :first-name  "John"
          :last-name   "Doe"
          :accounts    ["12346-01"]}})

;;;;
;; A collection of accounts.
;;
(def accounts-1
  {"12345-01" {:account-id   "12345-01"
                           :account-type :checking}
               "12345-02" {:account-id   "12345-02"
                           :account-type :credit}
               "12346-01" {:account-id   "12346-01"
                           :account-type :savings}})

;;;;
;; A collection of customers, each referencing one or more
;; account identifiers.
;;
(def customers-2
  {12345 {:customer-id 12345
          :first-name  "Maria"
          :last-name   "da Silva"
          :accounts    ["12345-01"
                        "12345-02"]}
   12346 {:customer-id 12346
          :first-name  "John"
          :last-name   "Smith"
          :accounts    ["12346-01"]}})
