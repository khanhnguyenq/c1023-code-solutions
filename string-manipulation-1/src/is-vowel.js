/* exported isVowel */
function isVowel(char) {
  const newChar = char.toLowerCase();
  switch (newChar) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}
