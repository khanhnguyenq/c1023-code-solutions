/* exported compact */
function compact(array) {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      answer.push(array[i]);
    }
  }
  return answer;
}
