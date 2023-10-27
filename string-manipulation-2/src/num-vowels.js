/* exported numVowels */
function numVowels(str) {
  let count = 0;
  const newStr = str.toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    switch (newStr[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        count++;
    }
  }
  return count;
}
