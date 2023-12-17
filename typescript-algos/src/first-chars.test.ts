import { firstChars } from './first-chars';

// Your code goes here
describe('firstChars', () => {
  it('returns "R"', () => {
    const string: string = 'React';
    const length: number = 1;
    const result: string = firstChars(length, string);
    expect(result).toBe('R');
  });

  it('returns "Java', () => {
    const string: string = 'JavaScript';
    const length: number = 4;
    const result: string = firstChars(length, string);
    expect(result).toBe('Java');
  });

  it('returns "LearningFuze', () => {
    const string: string = 'LearningFuze';
    const length: number = 20;
    const result: string = firstChars(length, string);
    expect(result).toBe('LearningFuze');
  });

  it('returns ""', () => {
    const string: string = '';
    const length: number = 5;
    const result = firstChars(length, string);
    expect(result).toBe('');
  });
});
