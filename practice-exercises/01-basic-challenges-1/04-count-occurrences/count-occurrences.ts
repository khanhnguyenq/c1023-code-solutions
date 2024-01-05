export function countOccurrences(str: string, char: string): number {
  let count: number = 0;
  const newStr: string[] = str.split('');
  newStr.forEach((x) => {
    if (x === char) {
      count++;
    }
  });
  return count;
}
