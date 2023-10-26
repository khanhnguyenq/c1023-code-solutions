/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const answer = [];
  for (let i = 0; i < words.length; i++) {
    answer.push(words[i] + suffix);
  }
  return answer;
}
