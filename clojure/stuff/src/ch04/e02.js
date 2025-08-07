//
// tags: map first car rest cons data-structure collection sequence
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

var map = function map(list, f) {
  return list === null
    ? null
    : cons(f(first(list)), map(rest(list), f));
}

console.log("\n## mapped\n");

var res1 = map(
  node1,
  function f(val) { return val + "-mapped"; }
);

log(first(res1));
// first-mapped

var res2 = map(
  node1,
  function f(val) { return val + "-mapped"; }
);

log(first(rest(res2)));
// middle-mapped

log(first(rest(rest(res2))));
// last-mapped

