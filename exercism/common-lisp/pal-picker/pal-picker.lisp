(defpackage :pal-picker
  (:use :cl)
  (:export :pal-picker :habitat-fitter :feeding-time-p
           :pet :play-fetch))

(in-package :pal-picker)

(defun pal-picker (personality)
  (cond
    ((string= personality :lazy) "Cat")
    ((string= personality :energetic) "Dog")
    ((string= personality :quiet) "Fish")
    ((string= personality :hungry) "Rabbit")
    ((string= personality :talkative) "Bird")
    (t "I don't know... A dragon?")))

(defun habitat-fitter (weight)
  (cond
    ((>= weight 40) :massive)
    ((and (>= weight 20) (<= weight 39)) :large)
    ((and (>= weight 10) (<= weight 19)) :medium)
    ((and (>= weight 1) (<= weight 9)) :small)
    ((<= weight 0) :just-your-imagination)))

(defun feeding-time-p (fullness)
  (if (> fullness 20)
    "All is well."
    "It's feeding time!"))

(defun pet (pet)
  (cond
    ((string= pet "Fish") "Maybe not with this pet...")
    (t nil)))

(defun play-fetch (pet)
  (cond
    ((string= pet "Dog") nil)
    (t "Maybe not with this pet...")))
