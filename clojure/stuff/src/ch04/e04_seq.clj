(ns ch04.e04-seq)

;;
;; seq always returns a value that looks and behaves like a list.
;;

;;;;
;; List as input.
;;
(seq '(1 two III))
;;=> (1 two III)

(type (seq '(1 two III)))
;;=> clojure.lang.PersistentList

;;;;
;; Vector as input.
;;
(seq [1 "two" 'III])
;;=> (1 "two" III)

(type (seq [1 "two" 'III]))
;;=> clojure.lang.PersistentVector$ChunkedSeq

;;;;
;; Hash Set as input.
;;
(seq #{1 "two" 'III})
;;=> (III 1 "two")

(type (seq #{1 "two" 'III}))
;;=> clojure.lang.APersistentMap$KeySeq

(seq {:one 1 :two 'II})
;;=> ([:one 1] [:two II])
;;
;; Note the output is a pair or tuple-like thing. So when a map is
;; turned into a seq, it becomes a list of pair, or a tuple-like
;; data structure (which is just a vector of two elements).
;;;;


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Convert seq back into some other type.
;;

(type (into '() (seq '(1 two III))))
;;=> clojure.lang.PersistentList

(type (into [] (seq [1 "two" 'III])))
;;=> clojure.lang.PersistentVector

(type (into #{} (seq #{1 "two" 'III})))
;;=> clojure.lang.PersistentHashSet

(type (into {} (seq {:one 1 :two 'II})))
;;=> clojure.lang.PersistentArrayMap
