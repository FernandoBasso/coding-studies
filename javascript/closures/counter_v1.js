const log = console.log.bind(console);




function makeCounter() {
  let count = 0;

  return function counter() {
    return count++;
  };
}

const counter = makeCounter();

log(counter());
//=> 0

log(counter());
//=> 1

log(counter());
//=> 2

log(counter());
//=> 3

log(counter());
//=> 4



