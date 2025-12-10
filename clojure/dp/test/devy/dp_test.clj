(ns devy.dp-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [devy.dp :refer [greet]]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 0)))

  (testing "greet function"
    (is (= (with-out-str (greet {:name "Tester"}))
           "Hello, Tester!\n"))
    (is (= (with-out-str (greet nil))
           "Hello, World!\n"))))
