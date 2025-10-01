(ns dsa-clj.eval-prn-test
  (:require [clojure.test :refer [deftest is testing]]
            [dsa-clj.eval-prn :refer [eval-prn]]))

(deftest eval-rpn-test
  (testing "addition"
    (is (= 3 (eval-prn [2 1 '+])))
    (is (= 33  (eval-prn [3 5 6 '+ '*])))
    (is (= 16 (eval-prn [5 1 2 '+ 4 '* '+ 3 '-])))))
