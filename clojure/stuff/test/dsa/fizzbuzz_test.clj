(ns dsa.fizzbuzz-test
  (:require [clojure.test :refer [deftest testing is]]
            [dsa.fizzbuzz :refer [fizzbuzz]]))

; (ns dedup-consecutive.dedup-test
;   (:require [clojure.test :refer [deftest testing is]]
;             [dedup-consecutive.dedup-v2 :refer [dedup]]))

(deftest fizzbuzz-test
  (testing "empty collection"
    (is (= 7 (fizzbuzz [])))))
