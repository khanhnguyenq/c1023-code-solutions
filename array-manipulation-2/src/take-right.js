/* exported takeRight */
function takeRight(array, count) {
  const answer = [];
  if (array.length === 0) {
    return answer;
  } else if (array.length < count) {
    return array;
  } else {
    for (let i = array.length - 1; count > 0; count--) {
      answer.unshift(array[i]);
      i--;
    }
  }
  return answer;
}
