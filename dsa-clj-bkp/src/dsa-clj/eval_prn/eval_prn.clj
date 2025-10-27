(ns eval-prn.eval-prn)

(def ^:private ops {'+ (fn [x y] (+ x y))
                    '* (fn [x y] (* x y))
                    '- (fn [minuend subtrahend] (- minuend subtrahend))
                    '/ (fn [x y] (/ x y))})

(- 5 2)

(defn eval-prn
  [expr]
  (let [stack []]
    (peek
     (reduce (fn [stk token]
               (prn token)
               (if (number? token)
                 (conj stk token)
                 (let [x (peek stk)
                       stk1 (pop stk)
                       y (peek stk1)
                       stk2 (pop stk1)]
                   (conj stk2 ((get ops token) x y)))))
             stack
             expr))))

(def v1 [2 1 '+])
(eval-prn v1)
#_(let [f (peek stk)
      stk1 (pop stk)
      x (peek stk1)
      stk2 (pop stk1)
      y (peek stk2)]
  (f x y))
