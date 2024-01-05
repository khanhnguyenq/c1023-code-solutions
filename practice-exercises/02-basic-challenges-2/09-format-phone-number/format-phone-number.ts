export function formatPhoneNumber(numbers: number[]): string {
  // return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
  const areaCode = numbers.slice(0, 3).join('');
  const three = numbers.slice(3, 6).join('');
  const four = numbers.slice(6).join('');

  return `(${areaCode}) ${three}-${four}`;
}
