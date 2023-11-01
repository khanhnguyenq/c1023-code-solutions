/* exported union */
function union(first, second) {
  const answer = [];
  for (let i = 0; i < first.length; i++) {
    answer.push(first[i]);
  }
  for (let i = 0; i < second.length; i++) {
    if (!answer.includes(second[i])) {
      answer.push(second[i]);
    }
  }
  return answer;
}
