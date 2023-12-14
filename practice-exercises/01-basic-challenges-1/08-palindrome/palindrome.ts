export function isPalindrome(str: string): boolean {
  const newStr = str.toLowerCase().split('');
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === ' ' && newStr[i] === ',') {
      newStr.splice(i, 1);
    }
  }
  let left: number = 0;
  let right: number = newStr.length - 1;

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[left] !== newStr[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}
