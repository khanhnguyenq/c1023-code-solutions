/* exported invert */
function invert(source) {
  const answer = {};
  for (const value in source) {
    const tempKey = value;
    const tempvalue = source[value];
    answer[tempvalue] = tempKey;
  }
  return answer;
}
