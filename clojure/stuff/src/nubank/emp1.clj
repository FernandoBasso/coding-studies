(ns nubank.emp1)
(def employee
  {:first-name "Aayla"
   :last-name "Secura"
   :employment-history ["Freelancer" "Thoughtworks"]})
;;=> {:first-name         "Aayla"
;;=>  :last-name          "Secura"
;;=>  :employment-history ["Freelancer" "Thoughtworks"]}

(defn hire_1
  [employee]
  (assoc
   (update
    (assoc
     employee :email (str (:first-name employee) "@nubank.com.br"))
    :employment-history conj "Nubank")
   :hired-at (java.util.Date.)))

;;
;; The thread first macro (->) will take the first expression, place it
;; in the second position of the following form, and repeat this process
;; with each form in the body of the macro. Thread "first" is the firment
;; position.
;;

(defn hire
  [employee]
  (-> employee
      (assoc :email (str (:first-name employee) "@nubank.com.br"))
      (update :employment-history conj "Nubank")
      (assoc :hired-at (java.util.Date.))))

(hire employee)
;;=> {:first-name "Aayla",
;;    :last-name "Secura",
;;    :employment-history ["Freelancer" "Thoughtworks" "Nubank"],
;;    :email "Aayla@nubank.com.br",
;;    :hired-at #inst "2025-08-21T19:31:01.731-00:00"}

