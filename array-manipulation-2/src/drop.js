/* exported drop */
function drop(array, count) {
  const answer = [];
  if (array.length === 0) {
    return [];
  } else {
    for (let i = count; i < array.length; i++) {
      answer.push(array[i]);
    }
  }
  return answer;
}
