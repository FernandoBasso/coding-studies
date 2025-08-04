;;
;; tags: destructuring function rest-parameter
;;

(ns fns)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Destructuring with functions
;;


(defn car
  "Returns the first element of a vector or list."
  [[x]]
  x)

(car '(May The Force Be With You))
;=> May

(car (range 6 9))
;=> 6


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Destructuring with rest parameters
;;
;; tags: rest tail cdr seq
;;
(defn cdr
  "Returns the collection without including the first element."
  [[_ & rest]]
  rest)

(cdr '(a b c d e f))
;=> (b c d e f)

(cdr '(May The Force Be With You))
;=> (The Force Be With You)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Destructuring from a map
;;
;; tags: destructuring map collection
;;
(defn treasure-location
  "Returns the treasure location with latitute and longitude."
  [{lat :lat lng :lng}]
  (format "Latitude: %.2f, Longitude: %.2f." lat lng))

(treasure-location {:id "0xff" :lat 21.13 :lng 77.91})
;=> "Latitude: 21.13, Longitude: 77.91."
;;
;; In this example lat maps to :lat and lng maps to :lng, which look
;; like they are the same name. But the name we bind does not have to be
;; the same as the map key.
;;

;;;;
;; The map passes :latitude and :longitude, but we bind them to lat and
;; lng, which are not the “same names”.
;;
;; tags: bind destructuring parameter
;;
(defn loc
  "Returns the location."
  [{lat :latitude lng :longitude}]
  (format
   "Go to latitude %.2f and longitude %.2f to find the treasure."
   lat
   lng))

(loc {:latitude 21.23 :longitude 77.91})
;=> "Go to latitude 21.23 and longitude 77.91 to find the treasure."
