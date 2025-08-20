(ns nubank.entity-stateful-reference)

;;;
;;; Evaluate these top-level forms one by one as we are working
;;; with refs, as if we run the whole module, then the later forms
;;; change the values of data previously defined.
;;;

(def accounts {"12345-01" (ref {:account-id "12345-01"
                                :account-type :checking})
               "12345-02" (ref {:account-id "12345-02"
                                :account-type :credit})
               "12346-01" (ref {:account-id "12346-01"
                                :account-type :savings})})

(def customers {12345 (ref {:customer-id 12345
                            :first-name  "Jane"
                            :last-name   "Doe"
                            :accounts [(get accounts "12345-01")
                                       (get accounts "12345-02")]})
                12346 (ref {:customer-id 12346
                            :first-name  "John"
                            :last-name   "Doe"
                            :accounts [(get accounts "12346-01")]})})

(def jane (get customers 12345))

(get @jane :first-name)

(dosync
 (alter (get customers 12345) assoc :first-name "Lara"))

(get @jane :first-name)
