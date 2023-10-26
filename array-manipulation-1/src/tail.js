/* exported tail */
function tail(array) {
  const answer = [];
  for (let i = 1; i < array.length; i++) {
    answer.push(array[i]);
  }
  return answer;
}
