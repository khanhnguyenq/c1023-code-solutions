const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const halfPrice = prices.map((x) => {
  const answer = {};
  answer.price = x;
  answer.salePrice = x / 2;
  return answer;
});

console.log('Price objects:', halfPrice);

const formattedPrices = prices.map((x) => {
  return `$${x}`;
});

console.log('Formatted Prices:', formattedPrices);
