/* exported intersection */
function intersection(first, second) {
  const answer = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      answer.push(first[i]);
    }
  }
  return answer;
}
