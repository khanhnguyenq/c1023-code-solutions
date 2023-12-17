import { fuzeBuzz } from './fuzeBuzz';

// Your code goes here
describe('fuzeBuzz', () => {
  it('returns ["1", "2"]', () => {
    const limit = 2;
    const result: string[] = fuzeBuzz(limit);
    expect(result).toEqual(['1', '2']);
  });

  it('returns ["1", "2", "Learning"]', () => {
    const limit = 3;
    const result: string[] = fuzeBuzz(limit);
    expect(result).toEqual(['1', '2', 'Learning']);
  });

  it('returns ["1", "2", "Learning", "4", "Fuze"]', () => {
    const limit = 5;
    const result: string[] = fuzeBuzz(limit);
    expect(result).toEqual(['1', '2', 'Learning', '4', 'Fuze']);
  });

  it("returns [['1', '2', 'Learning', '4', 'Fuze', 'Learning', '7', '8', 'Learning', 'Fuze', '11', 'Learning', '13', '14', 'LearningFuze']", () => {
    const limit = 15;
    const result: string[] = fuzeBuzz(limit);
    expect(result).toEqual([
      '1',
      '2',
      'Learning',
      '4',
      'Fuze',
      'Learning',
      '7',
      '8',
      'Learning',
      'Fuze',
      '11',
      'Learning',
      '13',
      '14',
      'LearningFuze',
    ]);
  });
});
