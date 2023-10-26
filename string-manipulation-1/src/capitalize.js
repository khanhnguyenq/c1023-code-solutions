/* exported capitalize */
function capitalize(word) {
  const newWord = word.toLowerCase().split('');
  const answer = [];
  answer.push(newWord[0].toUpperCase());
  for (let i = 1; i < newWord.length; i++) {
    answer.push(newWord[i]);
  }
  return answer.join('');
}
