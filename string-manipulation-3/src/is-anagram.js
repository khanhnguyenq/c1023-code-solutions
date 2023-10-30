/* exported isAnagram */
function isAnagram(firstStr, secondStr) {
  const word1 = [];
  const splitFirstStr = firstStr.split('');
  for (let i = 0; i < splitFirstStr.length; i++) {
    if (splitFirstStr[i] !== ' ') {
      word1.push(splitFirstStr[i]);
    }
  }
  const word2 = [];
  const splitSecondStr = secondStr.split('');
  for (let i = 0; i < splitSecondStr.length; i++) {
    if (splitSecondStr[i] !== ' ') {
      word2.push(splitSecondStr[i]);
    }
  }
  word1.sort();
  word2.sort();
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      return false;
    }
  }
  return true;
}
