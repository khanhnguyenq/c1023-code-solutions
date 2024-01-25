export function countVowels(str: string): number {
  let count: number = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i].toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        count++;
        break;
    }
  }
  return count;
}
