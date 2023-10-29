/* exported difference */
function difference(first, second) {
  const answer = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      answer.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      answer.push(second[i]);
    }
  }
  return answer;
}
