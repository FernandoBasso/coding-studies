(ns ch04.00)

(defn hello
  ([name]
   (str "Hello, " name "."))
  ([name msg]
   (str msg name ".")))

(hello "Yoda")

(hello "Aayla" "Welcome, ")

(defn g
  [p]
  1
  (+ 27 p)
  p
  (println p)
  "Hello!")

(#(+ 1 %) 1)
((fn [x] (+ x 1)) 1)
;;=> 2
