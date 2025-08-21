(ns nubank.ops3)

;;;
;;; Constructor functions with side effects.
;;;
;;; make-<thing> should be the name of the constructor function.
;;;

(defn audit-transaction
  "Returns an audit record for a transaction"
  [transaction]
  (println (str "starting: " transaction)))

(audit-transaction "transfer")

(defn make-transaction
  "Creates a transaction with an audit entry"
  [trx-type account-id amount & details]
  (let [timestamp (quot (System/currentTimeMillis) 1000)
        transaction {:transaction-type trx-type
                     :account-id account-id
                     :timestamp timestamp
                     :amount amount
                     :details details}]
    (audit-transaction transaction)))

(make-transaction :debit "12345" 1200)

