(ns devy.dp
  (:gen-class))

(defn greet
  "Callable entry point to the application."
  ([]
   "Hello, World!")
  ([name]
   (str "Hello, " (or name "World") "!")))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (greet (first args)))
