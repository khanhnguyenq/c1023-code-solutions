import { isAnagram } from './is-anagram';

// Your code goes here
describe('isAnagram', () => {
  it('returns true', () => {
    const firstString: string = 'astronomer';
    const secondString: string = 'moon starer';
    const result: boolean = isAnagram(firstString, secondString);
    expect(result).toEqual(true);
  });

  it('returns ', () => {
    const firstString: string = 'listen';
    const secondString: string = 'silent';
    const result: boolean = isAnagram(firstString, secondString);
    expect(result).toEqual(true);
  });

  it('returns ', () => {
    const firstString: string = 'programmer';
    const secondString: string = 'poor gamer';
    const result: boolean = isAnagram(firstString, secondString);
    expect(result).toEqual(false);
  });

  it('returns ', () => {
    const firstString: string = 'red dad';
    const secondString: string = 'rad ede';
    const result: boolean = isAnagram(firstString, secondString);
    expect(result).toEqual(false);
  });
});
