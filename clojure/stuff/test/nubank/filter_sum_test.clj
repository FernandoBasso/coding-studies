(ns nubank.filter-sum-test
  (:require [clojure.test :refer :all]
            [nubank.filter-sum :refer [filter-sum]]))


(deftest filter-sum-test
  (testing "empty collection"
    (is (= 0 (filter-sum [])))))
