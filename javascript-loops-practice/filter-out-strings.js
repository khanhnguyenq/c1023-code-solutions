/* exported filterOutStrings */
function filterOutStrings(array) {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
      answer.push(array[i]);
    }
  }
  return answer;
}
