/* exported unique */
function unique(array) {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    if (!answer.includes(array[i])) {
      answer.push(array[i]);
    }
  }
  return answer;
}
