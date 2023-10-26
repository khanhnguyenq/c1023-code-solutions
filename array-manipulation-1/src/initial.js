/* exported initial */
function initial(array) {
  const answer = [];
  for (let i = 0; i < array.length - 1; i++) {
    answer.push(array[i]);
  }
  return answer;
}
