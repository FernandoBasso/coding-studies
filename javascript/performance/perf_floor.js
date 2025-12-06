//
// tags: floor math bitwise integer
//


import { performance as perf } from "node:perf_hooks";

const log = console.log.bind(console);

//
// Performance comparison between flooring a number with
// Math.floor vs | 0 bitwise operation.
//
// IMPORTANT: Swap the two main blocks position and see that
// it somehow influences the results 😲.
//

//////////////////////////////////////////////////////////////////////////////
// Bitwise | 0
//
const ys = Array.apply(null, { length: 1e5 })
  .map(Function.call, Math.random);

var y;

const bitwiseIni = perf.now();

for (const num of ys)
  y = num | 0;

const bitwiseEnd = perf.now();

const bitwiseTime = bitwiseEnd - bitwiseIni;

log({ bitwiseTime });
//
// Bitwise | 0
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// Math.floor
//
const xs = Array.apply(null, { length: 1e5 })
  .map(Function.call, Math.random);

var x;

const mathRandIni = perf.now();
for (const num of xs)
  x = Math.random(num);

const mathRandEnd = perf.now();

const mathTime = mathRandEnd - mathRandIni;
log({ mathTime });
//
// Math.floor
//////////////////////////////////////////////////////////////////////////////
