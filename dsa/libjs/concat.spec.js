import { concat } from './index.js';

describe('concat()', () => {
  test('non-array or non-string inputs', () => {
    expect(
      () => concat(/grep/g, { some: 'object '})
    ).toThrow(new TypeError('concat(): both inputs must be arrays or strings.'));
  });

  test('arrays', () => {
    expect(concat([], [])).toEqual([]);
    expect(concat([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(concat([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('strings', () => {
    expect(concat('', '')).toEqual('');
    expect(concat('ab', '')).toEqual('ab');
    expect(concat('', 'ab')).toEqual('ab');
    expect(concat('ab', 'cd')).toEqual('abcd');
  });
});
