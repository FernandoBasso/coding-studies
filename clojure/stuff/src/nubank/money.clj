(ns nubank.money)

(def currencies {:usd {:divisor 100
                       :code    "USD"
                       :symbol  "$"
                       :desc    "US Dollars"}
                 :brl {:divisor 100
                       :code    "BRL"
                       :symbol  "R$"
                       :desc    "Brazilian Real"}
                 :ukg {:divisor (* 17 29)
                       :code    "UKG"
                       :symbol  "ʛ"
                       :desc    "Galleons of the United Kingdom"}})

(def default-currency (:brl currencies))

(defn show-galleons
  "Returns a display string for UKG currency"
  [amount]
  (let [{:keys [divisor code symbol desc]} (:ukg currencies)
        galleons (int (/ amount divisor))
        less-galleons (rem amount divisor)
        sickles (int (/ less-galleons 17))
        knuts (rem less-galleons 29)]
    (str galleons " Galleons, " sickles " Sickles, " knuts " Knuts.")))

(defn show-money
  "Returns a display string for cent-based currencies"
  [{:keys [amount currency]}]
  (let [{:keys [divisor code symbol desc]} currency]
    (cond
      (= code "UKG")
      (show-galleons amount)
      :else
      (let [major (int (/ amount divisor))
            minor (mod amount divisor)]
        (str symbol major "." minor)))))

(show-money {:amount 12 :currency (:usd currencies)})
;;=> "$0.12"

(show-money {:amount 12 :currency (:ukg currencies)})
;;=> "0 Galleons, 0 Sickles, 12 Knuts."

(defn make-money
  "Creates a Money entity"
  ([] {:amount 0
       :currency default-currency})
  ([amount] {:amount amount
             :currency default-currency})
  ([amount currency]
   (let [money {:amount amount
                :currency currency}]
     (-> money
         (assoc :displayed (show-money money))))))

(def currencies {:usd {:divisor 100
                       :code    "USD"
                       :symbol  "$"
                       :desc    "US Dollars"}
                 :brl {:divisor 100
                       :code    "BRL"
                       :symbol  "R$"
                       :desc    "Brazilian Real"}
                 :ukg {:divisor (* 17 29)
                       :code    "UKG"
                       :symbol  "ʛ"
                       :desc    "Galleons of the United Kingdom"}})

(def default-currency (:brl currencies))

(defn make-money
  "Creates a Money entity"
  ([] {:amount 0
       :currency default-currency})
  ([amount] {:amount amount
             :currency default-currency})
  ([amount currency]
   (let [money {:amount amount
                :currency currency}]
     (-> money
         (assoc :displayed (show-money money))))))

(defn- same-currency?
  "Checks whether the money arguments are all of the same currency."
  ([m1] true)
  ([m1 m2]
   (= (:currency m1) (:currency m2)))
  ([m1 m2 & monies]
   (every? true? (map #(same-currency? m1 %) (conj monies m2)))))

(same-currency? (make-money 1200 (:usd currencies)))
;;=> true

(same-currency?
 (make-money 1200 (:usd currencies))
 (make-money 749 (:usd currencies)))
;;=> true

(same-currency?
 (make-money 1200 (:usd currencies))
 (make-money 1200 (:brl currencies)))
;;=> false

(defn- same-amount?
  "Checks whether the money amounts are the same."
  ([m1] true)
  ([m1 m2]
   (zero? (.compareTo (:amount m1) (:amount m2))))
  ([m1 m2 & monies]
   (every? true? (map #(same-amount? m1 %) (conj monies m2)))))

(same-amount?
 (make-money 1200 (:usd currencies))
 (make-money 749 (:usd currencies)))
;;=> false

(same-amount?
 (make-money 1200 (:usd currencies))
 (make-money 1200 (:usd currencies)))
;;=> true

(defn- ensure-same-currency!
  "Throws an exception if currencies do not match; returns
   true otherwise."
  ([m1] true)
  ([m1 m2]
   (or (same-currency? m1 m2)
       (throw
        (ex-info "Currencies do not match"
                 {:m1 m1 :m2 m2}))))
  ([m1 m2 & monies]
   (every? true? (map #(ensure-same-currency m1 %) (conj monies m2)))))

;;;;
;; Change one :ukg to :brl or :usd and eval to cause the exception.
;;
(ensure-same-currency!
 (make-money 0 (:ukg currencies))
 (make-money 142 (:ukg currencies)))
;;=> true

(defn =$
  "Checks whether the money entities are equal. Equal money entities
   have the same amount and currency (disregarding other properties,
   like how they stringify to be displayed)."
  ([m1] true)
  ([m1 m2]
   (and (same-currency? m1 m2)
        (same-amount? m1 m2)))
  ([m1 m2 & monies]
   (every? true? (map #(=$ m1 %) (conj monies m2)))))

(=$
 (make-money 1200 (:ukg currencies))
 (make-money 1200 (:ukg currencies)))
;;=> true

(=$
 (make-money 1199 (:ukg currencies))
 (make-money 1200 (:ukg currencies)))
;;=> false

(=$
 (make-money 1200 (:ukg currencies))
 (make-money 1200 (:brl currencies)))
;;=> false

(defn +$
  "Returns a money entity that is the sum of the money arguments."
  ([m1] m1)
  ([m1 m2]
   (ensure-same-currency! m1 m2)
   (make-money (+ (:amount m1) (:amount m2)) (:currency m1)))
  ([m1 m2 & monies]
   (apply ensure-same-currency! m1 m2 monies)
   (let [amounts (map :amount (conj monies m1 m2))
         new-amount (reduce + amounts)]
     (make-money new-amount (:currency m1)))))
;;=> #'nubank.money/+$

(+$ (make-money 1200 (:brl currencies)))
;;=> {:amount    1199
;;=>  :currency  {:divisor 100
;;=>              :code    "BRL"
;;=>              :symbol  "R$"
;;=>              :desc    "Brazilian Real"}
;;=>  :displayed "R$12.0"}

(+$ (make-money 1200 (:brl currencies))
    (make-money 100 (:brl currencies))
    (make-money 1 (:brl currencies)))
;;=> {:amount    1300
;;=>  :currency  {:divisor 100
;;=>              :code    "BRL"
;;=>              :symbol  "R$"
;;=>              :desc    "Brazilian Real"}
;;=>  :displayed "R$13.1"}
