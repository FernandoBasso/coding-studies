(ns nubank.ops2)

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

; Money (specifically, $12.00 USD)
(def money-in-usd {:amount 1200
                   :currency :usd})

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

(show-galleons 474)

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

(make-money)
;;=> {:amount   0
;;=>  :currency {:divisor 100
;;=>             :code    "BRL"
;;=>             :symbol  "R$"
;;=>             :desc    "Brazilian Real"}}

(make-money 12)
;;=> {:amount   12
;;=>  :currency {:divisor 100
;;=>             :code    "BRL"
;;=>             :symbol  "R$"
;;=>             :desc    "Brazilian Real"}}

(make-money 12 (:ukg currencies))
;;=> {:amount    12
;;=>  :currency  {:divisor 493
;;=>              :code    "UKG"
;;=>              :symbol  "ʛ"
;;=>              :desc    "Galleons of the United Kingdom"}
;;=>  :displayed "0 Galleons, 0 Sickles, 12 Knuts."}
