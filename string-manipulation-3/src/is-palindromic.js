/* exported isPalindromic */
function isPalindromic(str) {
  const newStr = str.split('');
  const tempArray = [];
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== ' ') {
      tempArray.push(newStr[i]);
    }
  }
  const reversedArray = [];
  for (let i = tempArray.length - 1; i >= 0; i--) {
    reversedArray.push(tempArray[i]);
  }
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] !== reversedArray[i]) {
      return false;
    }
  }
  return true;
}
