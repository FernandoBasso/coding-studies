const log = console.log.bind(console);

function add(a, b) {
  return a + b;
}

function subtract(minuend, subtrahend) {
  return minuend - subtrahend;
}

function multiply(x, y) {
  return x * y;
}

function divide(dividend, divisor) {
  return dividend / divisor;
}

function negate(x) {
  return multiply(x, -1);
}

function truncate(x) {
  return x | 0;
}

function sum(xs) {
  return xs.reduce(add, 0);
}

const operations = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};
function calc(tokens) {
  const operands = [];
  let operator = "+";

  for (let i = 0; i < tokens.length; ++i) {
    if (Number.isInteger(tokens[i])) {
      let num = tokens[i];

      if (operator === "-")
        num = negate(num);
      else if (operator === "*")
        num = multiply(operands.pop(), num);
      else if (operator === "/")
        num = truncate(divide(operands.pop(), num));

      operands.push(num);
    } else {
      operator = tokens[i];
    }
  }

  return sum(operands);
}

if (import.meta.main) {
  const res1 = calc([2, "+", 3, "*", 5]);
  log({ res1 });

  const res2 = calc([3, "/", 2]);
  log({ res2 });

  const res3 = calc([3, "+", 5, "/", 2])
  log({ res3 });
}
