import { length } from './index.js';

describe('length()', () => {
  test('empty arrays', () => {
    expect(length([])).toEqual(0);
    expect(length('')).toEqual(0);
  });

  test('non-empty arrays', () => {
    expect(length([1])).toEqual(1);
    expect(length(Array(1e5))).toEqual(100_000);

    expect(length('z')).toEqual(1);

    //
    // BEWARE!!!
    //
    expect(length('💩')).toEqual(2);
  });
});
