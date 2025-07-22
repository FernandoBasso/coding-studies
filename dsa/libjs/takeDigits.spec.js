import { takeDigits } from './index.js';

describe('takeDigits()', () => {
  describe('when len < 1', () => {
    it('should throw range error', () => {
      expect(
        () => takeDigits(1984, 0)
      ).toThrow('len must be a number >= 1');
    });
  });

  describe('when len is >= than the number of digits', () => {
    it('should return the absolute value of num', () => {
      expect(takeDigits(0, 1)).toEqual(0);
      expect(takeDigits(-1, 4)).toEqual(1);
      expect(takeDigits(9, 3)).toEqual(9);
    });
  });

  it('should work with len 1', () => {
    expect(takeDigits(3, 1)).toEqual(3);
    expect(takeDigits(33, 1)).toEqual(3);
    expect(takeDigits(-37, 1)).toEqual(3);
    expect(takeDigits(-97, 1)).toEqual(9);
  });

  it('should work with len 2', () => {
    expect(takeDigits(301, 2)).toEqual(30);
    expect(takeDigits(-111, 2)).toEqual(11);
    expect(takeDigits(979, 2)).toEqual(97);
  });
});

