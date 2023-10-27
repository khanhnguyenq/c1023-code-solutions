/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const letter1 = string[firstIndex];
  const letter2 = string[secondIndex];
  let answer = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      answer += letter2;
    } else if (i === secondIndex) {
      answer += letter1;
    } else {
      answer += string[i];
    }
  }
  return answer;
}
