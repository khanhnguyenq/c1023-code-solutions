export function areAllCharactersUnique(str: string): boolean {
  const obj: Record<string, number> = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      return false;
    } else {
      obj[str[i]] = 1;
    }
  }
  return true;
}
