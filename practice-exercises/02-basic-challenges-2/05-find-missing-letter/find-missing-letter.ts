export function findMissingLetter(arr: string[]): string | undefined {
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  let result;
  const newArray = arr.join('').toLowerCase();
  const firstLetter = alphabet.indexOf(newArray[0]);
  const lastLetter = alphabet.indexOf(newArray[newArray.length - 1]);
  const loopCount = lastLetter - firstLetter;
  for (let i = 0; i <= loopCount; i++) {
    if (newArray[i] !== alphabet[i + firstLetter]) {
      result = alphabet[i + firstLetter];
      break;
    }
  }
  if (arr[0].toLowerCase() !== arr[0]) {
    return result?.toUpperCase();
  }
  return result;
}
