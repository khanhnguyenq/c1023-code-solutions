/* exported capitalizeWords */
function capitalizeWords(string) {
  const answer = [];
  const newStr = string.toLowerCase().split(' ');
  for (let i = 0; i < newStr.length; i++) {
    answer.push(
      newStr[i][0].toUpperCase() + newStr[i].substring(1, newStr[i].length)
    );
  }
  return answer.join(' ');
}
