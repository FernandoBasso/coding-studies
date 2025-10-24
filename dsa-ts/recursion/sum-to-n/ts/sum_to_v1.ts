//
// tags: function recursion sum
//

const log = console.log.bind(console);

/**
 * Sum the integers from 1 to (and including) n.
 */
function sumTo(n: number): number {
  if (n === 1)
    return 1;

  return n + sumTo(n - 1);
}

////
// 1
//
log(sumTo(1));
//=> 1

////
// 4 + 3 + 2 + 1
//
log(sumTo(4));
//=> 10

log(sumTo(9_457));
