export function isPalindrome(str: string): boolean {
  const newStr = str.toLowerCase().split('');
  const strArray: string[] = [];
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== ' ' && newStr[i] !== ',') {
      strArray.push(newStr[i]);
    }
  }
  const updatedStr = strArray.join('');
  let reversed = '';
  for (let i = updatedStr.length - 1; i >= 0; i--) {
    reversed += updatedStr[i];
  }
  return updatedStr === reversed;
}
