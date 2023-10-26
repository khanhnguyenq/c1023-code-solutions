/* exported getStudentNames */
function getStudentNames(array) {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(array[i].name);
  }
  return answer;
}
