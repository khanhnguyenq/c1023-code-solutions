/* exported reverseWords */
function reverseWords(string) {
  const splittedStr = string.split(' ');
  const tempArray = [];
  for (let i = 0; i < splittedStr.length; i++) {
    const tempWord = [];
    for (let k = splittedStr[i].length - 1; k >= 0; k--) {
      tempWord.push(splittedStr[i][k]);
    }
    tempArray.push(tempWord.join(''));
  }
  return tempArray.join(' ');
}
