//
// tags: map linked-list first rest cons
//

var log = console.log.bind(console);

var node3 = {
  value: "last",
  next: null,
};

var node2 = {
  value: "middle",
  next: node3,
};

var node1 = {
  value: "first",
  next: node2,
};

//
// Three core operations on a linked list:
//
// - first (or head, car)
// - rest (or tail, or cdr)
// - cons
//
// You can perform three core functions on a linked list: first, rest,
// and cons. first returns the value for the requested node, rest
// returns the remain- ing values after the requested node, and cons
// adds a new node with the given value to the beginning of the list.
// After those are implemented, you can implement map, reduce, filter,
// and other seq functions on top of them.
//

console.log("\n## first, rest, cons\n");

var first = function first(node) {
  return node.value;
};

var rest = function rest(node) {
  return node.next;
};

var cons = function cons(newValue, node) {
  return {
    value: newValue,
    next: node,
  };
};

log(first(node1));
// first

log(rest(node1).value);
// second

log(first(rest(rest(node1))));
// last

var node0 = cons("new first", node1);

log(first(node0));
// new first

var map = function map(f, list) {
  return list === null
    ? null
    : cons(f(first(list)), map(f, rest(list)));
}

console.log("\n## mapped\n");

var res1 = map(
  function f(val) { return val + "-mapped"; },
  node1
);

log(first(res1));
// first-mapped

var res2 = map(
  function f(val) { return val + "-mapped"; },
  node1
);

log(first(rest(res2)));
// middle-mapped

log(first(rest(rest(res2))));
// last-mapped


//
// Because map works in terms of first, rest and cons, we can
// map over any data structure that supports those three operations.
//


