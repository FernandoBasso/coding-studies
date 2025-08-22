(ns nubank.emp2)

(def jane
  {:first-name "Jane"
   :last-name "Doe"
   :employment-history ["Company-X" "Company-Y"]})

(defn hire1
  [employee]
  (assoc
   (update (assoc employee
                  :email (str (:first-name employee) "@nubank.com.br"))
           :employment-history conj "Nubank")
   :hired-at (java.util.Date.)))

(defn hire
  [employee]
  (-> employee
      (assoc :email (str (:first-name employee) "@nubank.com.br"))
      (update :employment-history conj "Nubank")
      (assoc :hired-at (java.util.Date.))))

(hire jane)

;; Current DB of hired employees
(def employees
  [{:first-name "A" :last-name "B" :email "A@nubank.com.br" :hired-at #inst "2022-05-20"}
   {:first-name "C" :last-name "D" :email "C@nubank.com.br" :hired-at #inst "2022-05-21"}
   {:first-name "E" :last-name "F" :email "E@nubank.com.br" :hired-at #inst "2022-05-21"}

   ;; Your fix was implemented and deployed here

   {:first-name "G" :last-name "H" :email "G.H@nubank.com.br" :hired-at #inst "2022-05-21"}
   {:first-name "I" :last-name "J" :email "I.J@nubank.com.br" :hired-at #inst "2022-05-22"}])

(defn email-address
  "Return email address containing first and last name."
  [employee]
  (format "%s.%s@nubank.com.br"
          (.toLowerCase (:first-name employee))
          (.toLowerCase (:last-name employee))))

(defn old-email-format?
  "Return true when employee email does not follow the new format."
  [employee]
  (not= (:email employee) (email-address employee)))

(defn hired-day
  "Return the day of hire from :hired-at."
  [employee]
  (.getDay (:hired-at employee)))

(hire jane)

(defn report
  [employees]
  (->> employees
       (filter old-email-format?)
       (map #(assoc % :email (email-address %)))
       (group-by hired-day)
       vals))

(report employees)
;;=> ([{:first-name "A",
;;      :last-name "B",
;;      :email "a.b@nubank.com.br",
;;      :hired-at #inst "2022-05-20T00:00:00.000-00:00"}]
;;    [{:first-name "C",
;;      :last-name "D",
;;      :email "c.d@nubank.com.br",
;;      :hired-at #inst "2022-05-21T00:00:00.000-00:00"}
;;     {:first-name "E",
;;      :last-name "F",
;;      :email "e.f@nubank.com.br",
;;      :hired-at #inst "2022-05-21T00:00:00.000-00:00"}
;;     {:first-name "G",
;;      :last-name "H",
;;      :email "g.h@nubank.com.br",
;;      :hired-at #inst "2022-05-21T00:00:00.000-00:00"}]
;;    [{:first-name "I",
;;      :last-name "J",
;;      :email "i.j@nubank.com.br",
;;      :hired-at #inst "2022-05-22T00:00:00.000-00:00"}])

(-> {}
    (assoc :id 1
           :may "the"
           :source "be"
           :with "you"))


(->> (range 0 5 1)
     (map inc)
     (filter even?)
     (apply +))

(def aayla {:first-name "Aayla" :last-name "Secura"})

(:last-name aayla)
(:hired-at aayla)

(-> aayla
    :last-name
    (.toUpperCase))

(-> aayla
    :hired-at)

;;;;
;; Aayla does not have :hired-at, so trying to .getTime on :hired-at will
;; cause an exception.
;;
;;(-> aayla
;;    :hired-at
;;    .getTime)

;;;;
;; But with some->, it avoids the exception and returns nil instead.
;;
(some-> aayla
        :hired-at
        .getTime)

;;;;
;; And if :hired-at exists (in a valid format), then we can
;; .getTime on it.
;;
(some-> (assoc aayla :hired-at #inst "2000-01-01")
        :hired-at
        .getTime)


(defn describe-number
  [n]
  (cond-> []
    (odd? n) (conj "odd")
    (even? n) (conj "even")
    (zero? n) (conj "zero")
    (pos? n) (conj "positive")
    (neg? n) (conj "nevative")))

(describe-number -7)
(describe-number -4)
(describe-number 0)
(describe-number 1)
(describe-number 2)


(as-> {:ints (range 0 5 1)} $
  (:ints $)
  (map inc $)
  (conj $ 100)
  (apply + $))
