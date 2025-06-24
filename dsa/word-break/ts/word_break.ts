import { log, len, max } from "../../libts";

export function wordBreak(str: string, words: Array<string>): boolean {
  const n: number = len(str);
  let maxLen: number = 0;

  for (const word of words) {
    maxLen = max(maxLen, len(word));
  }

  log(maxLen);

  return !!0;
}

wordBreak("helloworld", ["a", "you", "Yoda", "go"]);
