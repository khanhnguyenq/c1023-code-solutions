/* exported isLowerCased */
function isLowerCased(word) {
  const newWord = word.split('-').join('');
  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] === newWord[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
