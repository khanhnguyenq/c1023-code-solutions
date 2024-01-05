export function titleCase(str: string): string {
  const newStr: string[] = str.split(' ');
  const result = newStr
    .map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase())
    .join(' ');
  return result;
}
