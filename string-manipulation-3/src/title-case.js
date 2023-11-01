/* exported titleCase */
function titleCase(title) {
  const splittedTitle = title.toLowerCase().split(' ');
  const tempArray = [];
  for (let i = 0; i < splittedTitle.length; i++) {
    let tempWord;
    if (i === 0) {
      tempArray.push(
        splittedTitle[0].replace(
          splittedTitle[0][0],
          splittedTitle[0][0].toUpperCase()
        )
      );
    } else if (splittedTitle[i].toLowerCase() === 'i') {
      tempArray.push('I');
    } else if (
      splittedTitle[i] === 'and' ||
      splittedTitle[i] === 'but' ||
      splittedTitle[i] === 'the' ||
      splittedTitle[i] === 'for' ||
      splittedTitle[i] === 'per'
    ) {
      tempArray.push(splittedTitle[i]);
    } else if (splittedTitle[i].toLowerCase() === 'api') {
      tempArray.push('API');
    } else if (splittedTitle[i].length >= 3) {
      tempWord = splittedTitle[i].replace(
        splittedTitle[i][0],
        splittedTitle[i][0].toUpperCase()
      );
      tempArray.push(tempWord);
    } else {
      tempArray.push(splittedTitle[i]);
    }
  }
  const tempStr1 = tempArray.join(' ');
  const tempStr2 = tempStr1.replace('Javascript', 'JavaScript');
  let tempStr3 = '';
  for (let i = 0; i < tempStr2.length; i++) {
    if (tempStr2[i] === '-') {
      tempStr3 = tempStr2.replace(
        tempStr2[i + 1],
        tempStr2[i + 1].toUpperCase()
      );
      break;
    } else {
      tempStr3 = tempStr2;
    }
  }
  let tempStr4 = '';
  let colonIndex = 0;
  if (tempStr3.includes(':')) {
    colonIndex = tempStr3.indexOf(':');
    tempStr4 =
      tempStr3.substring(0, colonIndex) +
      ': ' +
      tempStr3.charAt(colonIndex + 2).toUpperCase() +
      tempStr3.substring(colonIndex + 3, tempStr3.length);
  } else {
    tempStr4 = tempStr3;
  }
  return tempStr4;
}
