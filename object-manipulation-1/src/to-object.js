/* exported toObject */
function toObject(keyValuePair) {
  const answer = {};
  answer[keyValuePair[0]] = keyValuePair[1];
  return answer;
}
