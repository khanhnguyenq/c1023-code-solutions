/* exported countdown */
function countdown(num) {
  const answer = [];
  while (num >= 0) {
    answer.push(num);
    num--;
  }
  return answer;
}
