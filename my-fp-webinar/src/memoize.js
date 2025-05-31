g; /* eslint-disable no-unused-vars */
import { l, log } from "./helpers";

function isPrime(num) {
  isPrime.cache = isPrime.cache || {};

  if (isPrime.cache[num] !== undefined) {
    l("--- returning cached", num, isPrime.cache[num]);
    return isPrime.cache[num];
  }

  let prime = num !== 1;

  for (let i = 2; i < num; ++i) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  isPrime.cache[num] = prime;

  return isPrime.cache[num];
}

l("isPrime(8):", isPrime(8));
l("isPrime(13):", isPrime(13));
l("isPrime(17):", isPrime(17));
l("isPrime(17):", isPrime(17));
l("isPrime(19):", isPrime(19));
l("isPrime(80):", isPrime(80));
l("isPrime(13):", isPrime(13));

l("primes:", isPrime.cache);
