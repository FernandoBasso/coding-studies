const log = console.log.bind(console);

function isDigit(c) {
  return /\d/.test(c);
}

function toInt(digits) {
  return Number.parseInt(digits.join(""), 10);
}

function insert(stack, number, operator) {
  let newNumber = number;

  if (operator === "-")
    newNumber = number * -1;
  else if (operator === "*")
    newNumber = stack.pop() * number;
  else if (operator === "/")
    newNumber = stack.pop() / number;

  stack.push(newNumber);
}

//
// The solution involves performing a depth-first recursion so
// the expressions with most precedence are computed first.
//
function calculate(expr) {
  function go(str, startIdx = 0) {
    const stack = [];
    let idx = startIdx;
    let sum = 0;
    let operator = "+";

    while (idx < str.length) {
      if (str[idx] === " ") {
        ++idx;
        continue;
      }

      if (isDigit(str[idx])) {
        const digits = [];

        while (idx < str.length && isDigit(str[idx])) {
          digits.push(str[idx++]);
        }

        --idx;

        const num = toInt(digits);

        insert(stack, num, operator);
      } else if (str[idx] === "(") {
        ++idx;
        const [newNum, newIdx] = go(str, idx);
        insert(stack, newNum, operator);
        idx = newIdx;
      } else if (str[idx] === ")") {
        break;
      } else {
        operator = str[idx];
      }

      ++idx;
    }

    const total = stack.reduce((memo, val) => memo + val, 0);

    return [total, idx];
  }

  const [sum] = go(expr);

  return sum;
}

if (import.meta.main) {
  const res1 = calculate("2+5-2");
  log({ res1 });
  //=> 5;

  const res2 = calculate("(1+(4+5+2)-3)+(6+8)");
  log({ res2 });
  //=> 23
}
