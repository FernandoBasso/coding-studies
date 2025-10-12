import { readFileSync } from "node:fs";

const log: Console["log"] = console.log.bind(console);

function readFile(path: string): string {
  return readFileSync(path, { encoding: "utf-8" });
}

log(readFile("../tsconfig.json"))
