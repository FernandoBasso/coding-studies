const log = console.log.bind(console);

function terminator(input, callback) {
  callback(`${input}, and terminated by running the callback.`);
}

function middleware(input, callback) {
  return terminator(`${input}, touched by middleware`, callback);
}

function initiate(input) {
  middleware(input, function callback(res) {
    log(res);
  });
}

initiate("Hello");
