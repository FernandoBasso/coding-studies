import { countDigits } from './index.js';

describe('countDigits()', () => {
  it('should count the number of digits', () => {
    expect(countDigits(-0)).toEqual(1);
    expect(countDigits(-1)).toEqual(1);
    expect(countDigits(0)).toEqual(1);
    expect(countDigits(-1)).toEqual(1);
    expect(countDigits(-9)).toEqual(1);
    expect(countDigits(9)).toEqual(1);
  });
});
