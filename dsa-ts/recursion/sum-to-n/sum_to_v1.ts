//
// tags: function recursion sum
//

const log = console.log.bind(console);

/**
 * Sum the integers from 1 to (and including) n.
 */
export function sumTo(n: number): number {
  if (n === 0 || n === 1)
    return n;

  return n + sumTo(n - 1);
}

if (require.main === module) {
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
}
