import { head } from './index.js';

describe('head()', () => {
  var expectedMsg = 'head(): input must be a non-empty array or string';

  test('non-string or non-array values', () => {
    expect(() => head(/grep/g)).toThrow(new TypeError(expectedMsg));
    expect(() => head(Object.create(null))).toThrow(new TypeError(expectedMsg));
  });

  test('empty string', () => {
    expect(() => head('')).toThrow(new TypeError(expectedMsg));
  });

  test('empty array', () => {
    expect(() => head([])).toThrow(new TypeError(expectedMsg));
  });

  test('single-char string', () => {
    expect(head('3')).toEqual('3');
    expect(head('✓')).toEqual('✓');
  });

  test('single-element array', () => {
    expect(head([Infinity])).toEqual(Infinity);
    expect(head([Math.PI])).toEqual(Math.PI);
  })

  test('two-or-more-char string', () => {
    expect(head('Check ✔')).toEqual('C');
  });

  test('two-or-more-element array', () => {
    expect(head([-Infinity, Math.PI, 42])).toEqual(-Infinity);
  });
});
