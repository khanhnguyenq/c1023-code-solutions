import { convertTemperature } from './convertTemperature';

// Your code goes here
describe('convertTemperature', () => {
  it('contains 309.65', () => {
    const number: number = 36.5;
    const result = convertTemperature(number);
    expect(result).toContainEqual(309.65);
  });

  it('contains 395.26', () => {
    const number: number = 122.11;
    const result = convertTemperature(number);
    expect(result).toContainEqual(395.26);
  });

  it('contains 97.7', () => {
    const number: number = 36.5;
    const result = convertTemperature(number);
    expect(result).toContainEqual(97.7);
  });

  it('contains 251.798', () => {
    const number: number = 122.11;
    const result = convertTemperature(number);
    expect(result).toContainEqual(251.798);
  });

  it('returns [273.15, 32]', () => {
    const number: number = 0;
    const result = convertTemperature(number);
    expect(result).toEqual([273.15, 32]);
  });
});
