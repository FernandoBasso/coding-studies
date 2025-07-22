import { containsDigit } from './index.js';

describe('containsDigit()', () => {
  it('should return false when digit is not present', () => {
    expect(containsDigit(1, 0)).toEqual(false);
    expect(containsDigit(1, 234)).toEqual(false);
    expect(containsDigit(5, 123467890)).toEqual(false);
  });

  it('should return true when digit is not present', () => {
    expect(containsDigit(1, 1)).toEqual(true);
    expect(containsDigit(1, 2314)).toEqual(true);
    expect(containsDigit(5, 1234567890)).toEqual(true);
    expect(containsDigit(5, 12345678590)).toEqual(true);
  });
});
