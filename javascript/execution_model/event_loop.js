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
