export function highestScoringWord(str: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const newStr = str.split(' ');
  const serialized = newStr.map((x) => {
    const newNewStr = x.split('');
    const numbered = newNewStr.map((x) => alphabet.indexOf(x) + 1);
    const totalEachWord = numbered.reduce((total, cur) => total + cur, 0);
    return totalEachWord;
  });
  const highest = Math.max(...serialized);
  const indexOfHighest = serialized.indexOf(highest);
  return newStr[indexOfHighest];
}
