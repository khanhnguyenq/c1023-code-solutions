/* exported take */
function take(array, count) {
  let answer = [];
  if (array.length === 0) {
    answer = [];
  } else {
    for (let i = 0; i < count; i++) {
      answer.push(array[i]);
    }
  }
  return answer;
}
