(defn get-name
  "Get the user name from a user map containing the :name key."
  [user]
  (:name user))

(defn full-name
  [user]
  (str (:first user) " " (:last user)))

(get-name {:name "Yoda", :email "yoda@jedi.dev"}) ; "Yoda"

(full-name {:first "Aayla" :last "Secura" }) ; "Aayla Secura"

