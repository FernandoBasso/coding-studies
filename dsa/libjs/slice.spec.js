import {
  slice,
  length,
} from './index.js';

describe('slice()', () => {
  test('empty input', () => {
    expect(slice(0, 5, [])).toEqual([]);
  });

  test('non-empty input', () => {
    var str = 'may the force be with you';
    expect(slice(0, 13, str)).toEqual('may the force');
    expect(slice(14, length(str), str)).toEqual('be with you');

    expect(slice(2, 4, [1, 2, 3, 4, 5, 6])).toEqual([3, 4]);
  });
});
