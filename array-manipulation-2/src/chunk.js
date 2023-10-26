/* exported chunk */
function chunk(array, size) {
  const answer = [];
  for (let i = 0; i < array.length; i += size) {
    answer.push(array.slice(i, i + size));
  }
  return answer;
}
