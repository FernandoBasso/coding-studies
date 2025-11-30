const log = console.log.bind(console);

function isDigit(c) {
  return /\d/.test(c);
}

function toInt(digits) {
  return Number.parseInt(digits.join(""), 10);
}

export function calc(str) {
  const operands = [];
  let operator = "+";

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === " ")
      continue;

    if (isDigit(str[i])) {
      const digits = [];
      while (i < str.length && isDigit(str[i]))
        digits.push(str[i++]);

      --i;

      let num = toInt(digits);

      if (operator === "-")
        num = -1 * num;
      else if (operator === "*")
        num = operands.pop() * num;
      else if (operator === "/")
        num = operands.pop() / num | 0;

      operands.push(num);
    } else
      operator = str[i];
  }

  return operands.reduce((acc, x) => acc + x, 0);
}

if (import.meta.main) {
  const res1 = calc("2 +3*5 * 1 * 1 * 1 - 1 + 1");
  log({ res1 });
  //=> 17

  const res2 = calc("3/ 2   ");
  log({ res2 });
  //=> 1

  const res3 = calc("3 +5 /2");
  log({ res3 });
  //=> 5

  const res4 = calc("234 * 1 * 2 / 2 + 1 - 1");
  log({ res4 });
  //=> 234
}
