export function findFirstNonRepeatingCharacter(
  str: string
): string | undefined {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1] && str[i] !== str[i + 1]) {
      return str[i];
    }
  }
  return undefined;
}
