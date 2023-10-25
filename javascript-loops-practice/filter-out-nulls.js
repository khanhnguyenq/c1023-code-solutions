/* exported filterOutNulls */
function filterOutNulls(values) {
  const answer = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i]) {
      answer.push(values[i]);
    }
  }
  return answer;
}
