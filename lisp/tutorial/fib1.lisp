;;;
;;; tags: fibonacci let loop when return rotatef
;;;

(let ((a 0) (b 1))
  (loop
    (when (> a 11) (return))
    (print a)
    (rotatef b (+ a b))))
