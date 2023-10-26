/* exported reverseWord */
function reverseWord(word) {
  const answer = [];
  for (let i = word.length - 1; i >= 0; i--) {
    answer.push(word[i]);
  }
  return answer.join('');
}
