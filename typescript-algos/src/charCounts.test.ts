import { charCounts } from './charCounts';

// Your code goes here
describe('charCounts', () => {
  it('returns {p: 3, e: 2, r: 1}', () => {
    const string = 'pepper';
    const result = charCounts(string);
    expect(result).toEqual({ p: 3, e: 2, r: 1 });
  });

  it('returns {p: 1, a: 1, s: 2, e: 2, n: 1, g: 1, r: 1}', () => {
    const string = 'PaSseNgEr';
    const result = charCounts(string);
    expect(result).toEqual({ p: 1, a: 1, s: 2, e: 2, n: 1, g: 1, r: 1 });
  });

  it("returns {h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1}", () => {
    const string = 'Hello World';
    const result = charCounts(string);
    expect(result).toEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      ' ': 1,
      w: 1,
      r: 1,
      d: 1,
    });
  });

  it('returns {}', () => {
    const string = '';
    const result = charCounts(string);
    expect(result).toEqual({});
  });
});
