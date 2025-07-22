import { tail } from './index.js';

describe('tail()', () => {
  var expectedMsg = 'tail(): input must be a non-empty string or array.';

  test('non-string or non-array input', () => {
    expect(
      () => tail(/grep/g)
    ).toThrow(new TypeError(expectedMsg));
  });

  test('empty string or empty array', () => {
    expect(
      () => tail('')
    ).toThrow(new TypeError(expectedMsg));

    expect(
      () => tail([])
    ).toThrow(new TypeError(expectedMsg));
  });

  test('valid, non empty strings or arrays', () => {
    expect(tail('z')).toEqual('');
    expect(tail([1])).toEqual([]);

    expect(tail('xyz')).toEqual('yz');
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });
});
