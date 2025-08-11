//
// tags: map array first rest cons
//

var log = console.log.bind(console);

var first = function first(arr) {
  return arr[0];
};

var rest = function rest(arr) {
  var sliced = arr.slice(1, arr.length);

  return sliced.length === 0
    ? null
    : sliced;
};

var cons = function cons(newValue, arr) {
  return [newValue].concat(arr);
};

///
// The exact same implementation as in the previous example.
//
var map = function map(f, coll) {
  return coll === null
    ? null
    : cons(f(first(coll)), map(f, rest(coll)));
}

var arr = ["Clojure", "Haskell"];
var f = function f(val) {
  return val + " mapped!";
};

//
// Due to the fact that map works in terms of first, rest and cons,
// and our arr type supports first, rest and cons, then we can use
// the same map as we used for lists.
//
log(map(f,  ["Clojure", "Haskell"]));
[ 'Clojure mapped!', 'Haskell mapped!', null ]
