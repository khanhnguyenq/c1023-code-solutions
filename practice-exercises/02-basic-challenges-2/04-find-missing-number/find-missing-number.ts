export function findMissingNumber(arr: number[]): number | undefined {
  let number = 0;
  const newArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i + 1] !== newArr[i] + 1) {
      number = newArr[i] + 1;
      break;
    }
  }
  return number;
}
