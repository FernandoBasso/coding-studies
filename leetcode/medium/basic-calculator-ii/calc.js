const log = console.log.bind(console);

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
        num = num * -1;
      else if (operator === "*")
        num = operands.pop() * num;
      else if (operator === "/")
        num = operands.pop() / num | 0;

      operands.push(num);
    } else {
      operator = tokens[i];
    }
  }

  log({ operands });

  return operands.reduce((acc, n) => acc + n, 0);
}

if (import.meta.main) {
  const res1 = calc([2, "+", 3, "*", 5]);
  log({ res1 });

  const res2 = calc([3, "/", 2]);
  log({ res2 });

  const res3 = calc([3, "+", 5, "/", 2])
  log({ res3 });
}
