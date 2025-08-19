(ns nubank.01.rec1)

(defrecord Employee [id
                     first-name
                     last-name
                     business-unit])

;;;;
;; Positional factory function to create an instance of Employee.
;;
(def john (->Employee 1234
                      "John"
                      "Doe"
                      :ledger))

(:business-unit john)
;;=> :ledger

;;;;
;; Map factory function to create an instance of Employee.
;;
(def jane (map->Employee {:id            6890
                          :first-name    "jane"
                          :last-name     "Doe"
                          :business-unit :legal
                          }))

(:business-unit jane)
;;=> :legal
