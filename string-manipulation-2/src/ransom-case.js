/* exported ransomCase */
function ransomCase(str) {
  let answer = '';
  const newStr = str.toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    if (i % 2 !== 0) {
      answer += newStr[i].toUpperCase();
    } else {
      answer += newStr[i];
    }
  }
  return answer;
}
