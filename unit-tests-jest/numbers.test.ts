import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns [2, 4, 10]', () => {
    const numbers = [2, 4, 5, 7, 9, 10];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 4, 10]);
  });

  it('returns [2, 4, 8]', () => {
    const numbers = [1, 2, 4, 5, 8, 9];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 4, 8]);
  });

  it('returns [10, 6, 38]', () => {
    const numbers = [3, 10, 5, 6, 33, 38, 7];
    const result = evenNumbers(numbers);
    expect(result).toEqual([10, 6, 38]);
  });
});

describe('toDollars', () => {
  it('convert to $10.00', () => {
    const num = 10;
    const result = toDollars(num);
    expect(result).toBe('$10.00');
  });

  it('convert to $8.00', () => {
    const num = 8;
    const result = toDollars(num);
    expect(result).toBe('$8.00');
  });

  it('converts to $9.50', () => {
    const num = 9.5;
    const result = toDollars(num);
    expect(result).toBe('$9.50');
  });
});

describe('divideBy', () => {
  it('returns [1, 2, 4, 5]', () => {
    const numbers = [2, 4, 8, 10];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 4, 5]);
  });

  it('returns [1, 2, 3, 4]', () => {
    const numbers = [3, 6, 9, 12];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('returns [1, 2, 3, 4]', () => {
    const numbers = [1, 2, 3, 4];
    const divisor = 1;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});

describe('multiplyBy', () => {
  it('returns {khanh: "nguyen", dan: 2}', () => {
    const object = { khanh: 'nguyen', dan: 1 };
    const multiplier = 2;
    const result = multiplyBy(object, multiplier);
    expect(result).toEqual({ khanh: 'nguyen', dan: 2 });
  });

  it('returns {khanh: 9, dan: "hahn", chris: 15}', () => {
    const object = { khanh: 3, dan: 'hahn', chris: 5 };
    const multiplier = 3;
    const result = multiplyBy(object, multiplier);
    expect(result).toEqual({ khanh: 9, dan: 'hahn', chris: 15 });
  });

  it('returns {khanh: "nguyen", dan: "hahn", chris: "tran"}', () => {
    const object = { khanh: 'nguyen', dan: 'hahn', chris: 'tran' };
    const multiplier = 10;
    const result = multiplyBy(object, multiplier);
    expect(result).toEqual({ khanh: 'nguyen', dan: 'hahn', chris: 'tran' });
  });

  it('returns {khanh: 5, dan: 10, chris: 15}', () => {
    const object = { khanh: 1, dan: 2, chris: 3 };
    const multiplier = 5;
    const result = multiplyBy(object, multiplier);
    expect(result).toEqual({ khanh: 5, dan: 10, chris: 15 });
  });
});
