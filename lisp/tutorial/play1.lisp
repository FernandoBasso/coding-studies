(defun pl (l)
  (dolist (e l)
    (format t "~d~%" e)))


(defparameter s "Usaga: fn [OPTIONS]

  -h             Display this message and exit
  -H hostname    Hostname to connect to")
