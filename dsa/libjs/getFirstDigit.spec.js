import { getFirstDigit } from './index.js';

describe('getFirstDigit()', () => {
  it('should throw range error', () => {
    expect(() => getFirstDigit(-1)).toThrow('num must be >= 0');
  });

  it('should get first digit of a one-digit number', () => {
    expect(getFirstDigit(0)).toEqual(0);
    expect(getFirstDigit(1)).toEqual(1);
    expect(getFirstDigit(9)).toEqual(9);
  });

  it('should get first digit of a two-digit number', () => {
    expect(getFirstDigit(10)).toEqual(1);
    expect(getFirstDigit(11)).toEqual(1);
    expect(getFirstDigit(97)).toEqual(9);
  });

  it('should get first digit of a three-digit number', () => {
    expect(getFirstDigit(101)).toEqual(1);
    expect(getFirstDigit(111)).toEqual(1);
    expect(getFirstDigit(979)).toEqual(9);
  });
});
