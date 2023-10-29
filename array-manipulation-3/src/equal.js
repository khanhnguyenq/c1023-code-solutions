/* exported equal */
function equal(first, second) {
  let answer;
  if (first.length === 0 && second.length === 0) {
    answer = true;
  } else if (first.length !== second.length) {
    answer = false;
  } else {
    for (let i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        answer = true;
      } else {
        answer = false;
        break;
      }
    }
  }
  return answer;
}
