/* exported getValues */
function getValues(obj) {
  const answer = [];
  for (const key in obj) {
    answer.push(obj[key]);
  }
  return answer;
}
