;;
;; tags: function expression syntax
;;

(ns fns1a)

;;;;
;; All functions are call applied with open parenthesis, followed by a
;; function expression, followed by zero or more arguments, ending with
;; a closing parenthesis.
;;
(inc 1.1)
;=> 2.1

;;;;
;; To be “called” as a function, an expression must be a function.
;; For example, 1 is not a function:
;;
;(1 2 3)
;~ Unhandled java.lang.ClassCastException
;~ class java.lang.Long cannot be cast to class clojure.lang.IFn
;;;;

;;;;
;; Some functions take other functions as argument:
;;
(map inc [1.1 7 41])
;=> (2.1 8 42)

(defn greet
  ([name]
   (str "Hello, " name "."))
  ([name msg]
   (str msg name ".")))

(greet "Aayla")
;=> "Hello, Aayla."

(greet "Aayla" "I bow before your might, ")
;=> "I bow before your might, Aayla."



