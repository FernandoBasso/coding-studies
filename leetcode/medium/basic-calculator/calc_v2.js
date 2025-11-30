const log = console.log.bind(console);

function isDigit(c) {
  return /\d/.test(c);
}

function toInt(digits) {
  return Number.parseInt(digits.join(""), 10);
}

function calculate(str) {
  log(str);

  function go(arr, startIdx = 0) {
    let idx = startIdx;
    let sum = 0;
    let operator = 1;

    while (idx < arr.length) {
      if (arr[idx] === ")") {
        break;
      } else if (arr[idx] === "(") {
        idx++;
        const [result, newIdx] = go(arr, idx);
        sum += operator * result;
        idx = newIdx;
      } else if (arr[idx] === "-") {
        operator = -1;
      } else if (arr[idx] === "+") {
        operator = 1;
      } else if (isDigit(arr[idx])) {
        const digits = [];
        while (idx < arr.length && isDigit(arr[idx])) {
          digits.push(arr[idx++]);
        }
        idx--;

        sum += toInt(digits) * operator;
      }

      idx++;
    }

    return [sum, idx];
  }

  const arr = str.split("");
  log(arr);
  const [result] = go(arr);
  return result;
}

if (import.meta.main) {
  const res1 = calculate("2 + 5 - 2");
  log({ res1 });
  //=> 5;

  const res2 = calculate("(1+(4+5+2)-3)+(6+8)");
  log({ res2 });
  //=> 23
}
