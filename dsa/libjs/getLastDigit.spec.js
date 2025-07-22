import { getLastDigit } from './index.js';

describe('getLastDigit()', () => {
  it('should throw range error when digit is not an integer', () => {
    expect(() => getLastDigit(1.1)).toThrow('num must be an integer');
  });

  it('should get last digit of a one-digit number', () => {
    expect(getLastDigit(0)).toEqual(0);
    expect(getLastDigit(1)).toEqual(1);
    expect(getLastDigit(9)).toEqual(9);
  });

  it('should get last digit of a two-digit number', () => {
    expect(getLastDigit(10)).toEqual(0);
    expect(getLastDigit(11)).toEqual(1);
    expect(getLastDigit(97)).toEqual(7);
  });

  it('should get last digit of a three-digit number', () => {
    expect(getLastDigit(103)).toEqual(3);
    expect(getLastDigit(404)).toEqual(4);
    expect(getLastDigit(479)).toEqual(9);
  });
});
