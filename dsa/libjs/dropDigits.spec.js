import { dropDigits } from './index.js';

describe('dropDigits()', () => {
  describe('when len is >= than the number of digits', () => {
    it('should return the number itself', () => {
      expect(dropDigits(-1234, 5)).toEqual(1234);
      expect(dropDigits(1e3, 5)).toEqual(1000);
    });
  });

  describe('when len is < than the number of digits', () => {
    it('should drop the first digit', () => {
      expect(dropDigits(123, 1)).toEqual(23);
      expect(dropDigits(-7597, 1)).toEqual(597);
    });

    it('should drop the first two digits', () => {
      expect(dropDigits(123, 2)).toEqual(3);
      expect(dropDigits(-7597, 2)).toEqual(97);
    });

    it('should drop the first three digits', () => {
      expect(dropDigits(-1234, 3)).toEqual(4);
      expect(dropDigits(123456789, 3)).toEqual(456789);
    });

    it('should drop the first eight digits', () => {
      expect(dropDigits(123456789, 8)).toEqual(9);
      expect(dropDigits(-123456789, 8)).toEqual(9);
    });
  });
});
