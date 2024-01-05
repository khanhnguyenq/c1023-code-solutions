export function sumOfEvenSquares(numbers: number[]): number {
  const evens = numbers.filter((x) => x % 2 === 0);
  const squared = evens.map((x) => x * x);
  return squared.reduce((total, num) => total + num, 0);
}
