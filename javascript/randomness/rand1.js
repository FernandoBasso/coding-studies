// tags: number random float integer

const log = console.log.bind(console);

/**
 * Returns a random (float) number between min and max.
 *
 * min is inclusive, max is exclusive.
 */
function randFloatBetween(min, max) {
  return min + Math.random() * (max - min);
}

let i = 0;
while (i++ < 6)
  log(randFloatBetween(1, 5));
//=> $ node ./rand1.js
//=> 1.6591750364812619
//=> 3.2449170155219234
//=> 2.36178014174496
//=> 4.918172900164211
//=> 2.7632645913198193
//=> 3.4860415849907653

function randIntBetween(min, max) {
  return (min + Math.random() * (max - min)) | 0;
}

let j = 0;
while (j++ < 8)
  log(randIntBetween(0, 5));
// $ node ./rand1.js
//=> 0
//=> 1
//=> 4
//=> 1
//=> 4
//=> 2
//=> 3
//=> 2
