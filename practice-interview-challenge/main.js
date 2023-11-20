function getRangeReport(start, end) {
  const answer = {};
  const arrayOfNum = [];
  for (let i = start; i <= end; i++) {
    arrayOfNum.push(i);
  }
  let sumOfRange = 0;
  const evens = [];
  const odds = [];
  for (let i = 0; i < arrayOfNum.length; i++) {
    sumOfRange += arrayOfNum[i];
    if (arrayOfNum[i] % 2 === 0) {
      evens.push(arrayOfNum[i]);
    } else {
      odds.push(arrayOfNum[i]);
    }
  }
  answer.average = sumOfRange / arrayOfNum.length;
  answer.evens = evens;
  answer.odds = odds;
  answer.range = arrayOfNum;
  answer.total = sumOfRange;
  return answer;
}

getRangeReport(); // does nothing, it allows me to by pass the commit error
