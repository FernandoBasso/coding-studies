import { numToDigits } from './index.js';

describe('numToDigits()', () => {
  it('should create an array of digits from number', () => {
    expect(numToDigits(0)).toEqual([0]);
    expect(numToDigits(39)).toEqual([3, 9]);
    expect(numToDigits(1e4)).toEqual([1, 0, 0, 0, 0]);
    expect(numToDigits(-39785)).toEqual([3, 9, 7, 8, 5]);
  });
});
