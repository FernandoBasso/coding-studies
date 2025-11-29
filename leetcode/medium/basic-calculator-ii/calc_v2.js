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

function toInt(str) {
  return Number.parseInt(str.join(""), 10);
}

function isDigit(c) {
  return /\d/.test(c);
}

function isOperator(c) {
  return ["+", "-", "*", "/"].includes(c);
}

function isLast(str, i) {
  return str[i + 1] === undefined;
}

function tokenize(str) {
  const tokens = [];
  let digits = [];
  let operator = "+";

  for (let i = 0; i < str.length; ++i) {
    let digits = [];

    if (!isDigit(str[i]) && !isOperator(str[i])) {
      continue;
    }

    if (isDigit(str[i])) {
      while (i < str.length && isDigit(str[i]))
        digits.push(str[i++]);

      // We need to undo the i++ in the line above in case
      // we are not handling digits any longer.
      --i;

      tokens.push(toInt(digits));
      digits = [];
    } else {
      tokens.push(str[i]);
    }
  }

  return tokens;
}

function calc(str) {
  const tokens = tokenize(str);
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
  const res1 = calc("2 +3*5 * 1 * 1 * 1 - 1 + 1");
  log({ res1 });

  const res2 = calc("3/ 2   ");
  log({ res2 });

  const res3 = calc("3 +5 /2")
  log({ res3 });

  const res4 = calc("234 + 1 - 1");
  log({ res4 });

  log(tokenize("234 + 1 - 1"));
  log(tokenize("1 - 234 / 9 * 1"))
}

export { tokenize, calc };
