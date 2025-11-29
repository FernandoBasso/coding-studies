const log = console.log.bind(console);

function isDigit(c) {
  return /\d/.test(c);
}

class Calc {
  #arr;
  #idx = 0;

  constructor(str) {
    this.#arr = str.split("");
    log(str);
    log(this.#arr);
  }

  run() {
    let sum = 0;
    let operator = 1;

    while (this.#idx < this.#arr.length) {
      if (this.#arr[this.#idx] === ")") {
        break;
      } else if (this.#arr[this.#idx] === "(") {
        this.#idx++;
        sum += operator * this.run();
      } else if (this.#arr[this.#idx] === "-") {
        operator = -1;
      } else if (this.#arr[this.#idx] === "+") {
        operator = 1;
      } else if (isDigit(this.#arr[this.#idx])) {
        const digits = [];
        while (this.#idx < this.#arr.length && isDigit(this.#arr[this.#idx])) {
          digits.push(this.#arr[this.#idx++]);
        }

        this.#idx--;

        sum += Number.parseInt(digits.join(""), 10) * operator;
      }

      this.#idx++;
    }

    return sum;
  }
}

if (import.meta.main) {
  const res1 = new Calc("2 + 5 - 2").run();
  log({ res1 });
  //=> 5;

  const res2 = new Calc("(1+(4+5+2)-3)+(6+8)").run();
  log({ res2 });
  //=> 23
}
