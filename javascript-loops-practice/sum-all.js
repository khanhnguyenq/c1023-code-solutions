/* exported sumAll */
function sumAll(array) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    answer += array[i];
  }
  return answer;
}
