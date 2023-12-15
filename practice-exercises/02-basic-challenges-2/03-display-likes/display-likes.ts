export function displayLikes(names: string[]): string {
  // Get the length of the array
  const length = names.length;

  // Return the appropriate string based on the length of the array
  let result: string;
  switch (length) {
    case 0:
      result = 'no one likes this';
      break;
    case 1:
      result = `${names[0]} likes this`;
      break;
    case 2:
      result = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      result = `${names[0]}, ${names[1]} and ${length - 2} others like this`;
      break;
  }
  return result;
}
