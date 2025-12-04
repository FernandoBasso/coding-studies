const log = console.log.bind(console);

function increment(x) {
  return x + 1;
}

function decrement(x) {
  return x - 1;
}

function makeCounter(initialCount, modifyCountFn) {
  let count = initialCount;

  return function counter() {
    const countToReturn = count;

    count = modifyCountFn(count);

    return countToReturn;
  };
}

const countUp = makeCounter(0, increment);
log("===== count up from zero");

log(countUp());
//=> 0

log(countUp());
//=> 1

log(countUp());
//=> 2

const countDown = makeCounter(2, decrement);
log("===== count down from two")

log(countDown());
//=> 2

log(countDown());
//=> 1

log(countDown());
//=> 0

log(countDown());
//=> -1

log(countDown());
//=> -2

const countUpBy3 = makeCounter(0, x => x + 3);
log("===== count up by three");

log(countUpBy3());
//=> 0

log(countUpBy3());
//=> 3

log(countUpBy3());
//=> 6

