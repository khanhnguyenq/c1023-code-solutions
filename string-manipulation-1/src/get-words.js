/* exported getWords */
function getWords(str) {
  if (str.length === 0) {
    return [];
  } else {
    return str.split(' ');
  }
}
