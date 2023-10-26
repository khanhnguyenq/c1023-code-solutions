/* exported oddOrEven */
function oddOrEven(array) {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      answer.push('even');
    } else {
      answer.push('odd');
    }
  }
  return answer;
}
