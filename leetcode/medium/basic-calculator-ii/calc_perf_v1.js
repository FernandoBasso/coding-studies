const log = console.log.bind(console);

function isDigit(c) {
  return /\d/.test(c);
}

function calc(str) {
  const stack = [];
  let operator = "+";

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === " ") {
      continue;
    }

    if (isDigit(str[i])) {
      const digits = [];
      while (i < str.length && isDigit(str[i])) {
        digits.push(str[i++]);
      }
      --i;

      let num = Number.parseInt(digits.join(""), 10);

      if (operator === "-") {
        num = -1 * num;
      } else if (operator === "*") {
        num = stack.pop() * num;
      } else if (operator === "/") {
        num = stack.pop() / num | 0;
      }

      stack.push(num);
    } else {
      operator = str[i];
    }
  }

  return stack.reduce((acc, x) => acc + x, 0);
}

if (import.meta.main) {
  const res1 = calc("3 + 5 / 2");
  log({ res1 });
}
