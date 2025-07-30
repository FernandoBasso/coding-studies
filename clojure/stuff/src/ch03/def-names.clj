(ns def-names)

;;
;; def to BIND (not assign) values to a name.
;;
;; Treat def as defining constants. Avoid “reassigning”.
;;
(def masters ["Ahsoka Tano", "Yoda", "Luke Skywalker"])

;;
;; Don't “reassign” to “variables” like this:
;;
(def severity :mild)
(def error-message "We are ")
(if (= severity :mild)
  (def error-message (str error-message "mildly inconvinienced."))
  (def error-message (str error-message "DOOMED!")))
;;
;; No! Don't “reassign” like that.
;;

;;
;; Do something like this instead.
;;
(defn errmsg
  [sev]
  (str "We are "
       (if (= sev :mild)
         "mildly inconvinienced."
         "DOOMED!")))
(errmsg :mild)
(errmsg :critical)
