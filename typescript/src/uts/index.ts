// import './e01a';
// import './e01b';
// import './e02a';
// import './e02b';
// import './e03a';
// import './e03c';
// import './e04a';

// import './log_v1';

// @ts-nocheck

const log = console.log.bind(console);

function withDate(logFn) {
  return function logWithDate(msg) {
    const dateStr = new Date().toLocaleString();
    logFn.call(null, `${dateStr}: ${msg}`);
  };
}

const logger = withDate(log);

logger('IT FUCKING WORKS!');
//=> 5/25/2023, 8:57:53 AM: IT FUCKING WORKS!
