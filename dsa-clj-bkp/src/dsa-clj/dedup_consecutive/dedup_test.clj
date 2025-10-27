(ns dedup-consecutive.dedup-test
  (:require [clojure.test :refer [deftest testing is]]
            [dedup-consecutive.dedup-v2 :refer [dedup]]))

(deftest dedup-test
  (testing "empty input"
    (is (= [] (dedup []))))

  (testing "a single value consectively repeated"
    (is (= [1] (dedup [1 1 1 1 1]))))

  (testing "a few elements consectively repeated"
    (is (= [1 2 3 4] (dedup [1 1 2 2 2 3 3 4]))))

  (testing "no elements consectively repeated"
    (is (= [1 2 3 4] (dedup [1 2 3 4]))))

  (testing "non-consecutive duplicates"
    (is (= [1 2 1 2] (dedup [1 1 2 1 2 2]))))

  (testing "no duplicates"
      (is (= [1 2 3 4 5] (dedup [1 2 3 4 5 5])))))
