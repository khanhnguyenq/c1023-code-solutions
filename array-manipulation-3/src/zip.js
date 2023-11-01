/* exported zip */
function zip(first, second) {
  let shorter;
  if (first.length > second.length) {
    shorter = second;
  } else {
    shorter = first;
  }
  const tempArray = [];
  for (let i = 0; i < shorter.length; i++) {
    if (first[i] !== 'undefined' && second[i] !== 'undefined') {
      tempArray.push([first[i], second[i]]);
    }
  }
  return tempArray;
}
