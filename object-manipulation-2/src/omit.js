/* exported omit */
function omit(source, keys) {
  const answer = {};
  for (const x in source) {
    if (!keys.includes(x)) {
      answer[x] = source[x];
    }
  }
  return answer;
}
