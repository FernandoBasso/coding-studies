import { swap } from './index.js';

describe('swap()', () => {
  test('should swap two elements', () => {
    var xs = [10, 30, 20];
    swap(xs, 1, 2);
    expect(xs).toEqual([10, 20, 30]);
  });
});
