/* exported pick */
function pick(source, keys) {
  const answer = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source && typeof source[keys[i]] !== 'undefined') {
      answer[keys[i]] = source[keys[i]];
    }
  }
  return answer;
}
