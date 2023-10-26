/* exported dropRight */
function dropRight(array, count) {
  const answer = [];
  for (let i = 0; count < array.length; count++) {
    answer.push(array[i]);
    i++;
  }
  return answer;
}
