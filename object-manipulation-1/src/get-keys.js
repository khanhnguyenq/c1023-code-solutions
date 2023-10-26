/* exported getKeys */
function getKeys(obj) {
  const answer = [];
  for (const key in obj) {
    answer.push(key);
  }
  return answer;
}
