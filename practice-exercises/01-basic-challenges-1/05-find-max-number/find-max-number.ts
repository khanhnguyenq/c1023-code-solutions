export function findMaxNumber(arr: number[]): number {
  let max: number = 0;
  arr.forEach((x) => {
    if (x > max) {
      max = x;
    }
  });
  return max;
}
