/* exported flatten */
function flatten(array) {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let k = 0; k < array[i].length; k++) {
        answer.push(array[i][k]);
      }
    } else {
      answer.push(array[i]);
    }
  }
  return answer;
}
