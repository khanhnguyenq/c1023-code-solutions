/* exported reverse */
function reverse(array) {
  const answer = [];
  for (let i = array.length - 1; i >= 0; i--) {
    answer.push(array[i]);
  }
  return answer;
}
