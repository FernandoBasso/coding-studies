// tags: event-loop execution

const fs = require('fs');

//
// In what order will the output happen? Why?
//
const log = console.log.bind(console);

log('A');

setTimeout(() => log('B'), 0);

Promise.resolve().then(() => log('C'));

process.nextTick(() => log('D'));

fs.readFile(__filename, () => log('E'));

log('F');

/*
In Node.js:

Synchronous stuff happen first, so A then F are printed.

Next, microtasks are executed. nextTick() has hihger priority than
promise microtasks, so D is printed.

The, promise microtasks prints C.

Timers phase, B is printed.

The poll phase IO/callbacks run, so, E is printed (if the file is
done being read).
*/
