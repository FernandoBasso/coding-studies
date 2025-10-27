const log = console.log.bind(console);

function hello(name) {
  return `Hello, ${name}!`;
}

log(process.argv[1]);
log(import.meta.url);

if (import.meta.url === `file://${process.argv[1]}`)
  log("Running directly.");
