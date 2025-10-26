const log = console.log.bind(console);

export function search(
  needle: number,
  haystack: Array<number>,
): boolean {
  for (const num of haystack) {
    if (num === needle) return true;
  }

  return false;
}

if (require.main === module) {
  log(search(7, []));
  log(search(7, [3, 5, 9, 7, 1]));
  log(search(7, [1, 9, 1001]));
}

// node bsearch.ts
