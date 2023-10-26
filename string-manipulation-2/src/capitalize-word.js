/* exported capitalizeWord */
function capitalizeWord(word) {
  return word.toLowerCase() === 'javascript'
    ? 'JavaScript'
    : word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
}
