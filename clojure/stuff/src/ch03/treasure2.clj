;;
;; tags: destructuring map key
;;

(ns treasure2)

;;;;
;; Using :keys shorter syntax for breaking keywords out of a map when
;; performing destructuring.
;;
(defn treasure-location
  "Returns a string announcing the treasure location."
  [{:keys [lat lng]}]
  (format
   "The treasure is located at latitude %.2f, longitude %.2f."
   lat
   lng))

(treasure-location {:id "0xff" :lat 21.47 :lng 88.79})
;=> "The treasure is located at latitude 21.47, longitude 88.79."
