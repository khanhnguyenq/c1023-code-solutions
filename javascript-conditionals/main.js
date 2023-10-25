/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(num) {
  if (num < 5) {
    return true;
  } else {
    return false;
  }
}

console.log('isUnderFive(4) value:', isUnderFive(4));
console.log('isUnderFive(10) value:', isUnderFive(10));

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('isEven(9) value:', isEven(9));
console.log('isEven(8) value:', isEven(8));

function startsWithJ(str) {
  if (str[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log('startsWithJ("Khanh") value:', startsWithJ('Khanh'));
console.log('startsWithJ("John") value:', startsWithJ('John'));

const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};
const homer = {
  name: 'Homer Jay Simpson',
  age: 40,
};

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

console.log('isOldEnoughToDrink(bart) value:', isOldEnoughToDrink(bart));
console.log('isOldEnoughToDrink(homer) value:', isOldEnoughToDrink(homer));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

console.log('isOldEnoughToDrive(bart) value:', isOldEnoughToDrive(bart));
console.log('isOldEnoughToDrive(homer)) value:', isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 21) {
    return 'False, this is illegal!';
  } else if (person.age >= 10) {
    return 'False, this is even more illegal!';
  } else {
    return 'No Drinking and Driving!';
  }
}

console.log(
  'isOldEnoughToDrinkAndDrive(bart) value:',
  isOldEnoughToDrinkAndDrive(bart)
);
console.log(
  'isOldEnoughToDrinkAndDrive(homer) value:',
  isOldEnoughToDrinkAndDrive(homer)
);

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

console.log('categorizeAcidity(7) value:', categorizeAcidity(7));
console.log('categorizeAcidity(15) value:', categorizeAcidity(15));
console.log('categorizeAcidity(-1) value:', categorizeAcidity(-1));
console.log('categorizeAcidity(4) value:', categorizeAcidity(4));
console.log('categorizeAcidity(10) value:', categorizeAcidity(10));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Good night everybody!';
  }
}

console.log('introduceWarnerBro("wakko") value:', introduceWarnerBro('wakko'));
console.log('introduceWarnerBro("yakko") value:', introduceWarnerBro('yakko'));
console.log('introduceWarnerBro("dot") value:', introduceWarnerBro('dot'));
console.log('introduceWarnerBro("Khanh") value:', introduceWarnerBro('Khanh'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Heart of Stone';
    case 'comedy':
      return 'Old Dads';
    case 'horror':
      return 'Evil Dead Rise';
    case 'drama':
      return 'Nowhere';
    case 'musical':
      return 'The Little Mermaid';
    case 'sci-fi':
      return 'If You Were the Last';
    default:
      return 'Choose between action, comedy, horror, drama, musical, and sci-fi.';
  }
}

console.log('recommendMovie("action") value:', recommendMovie('action'));
console.log('recommendMovie("nothing") value:', recommendMovie('nothing'));
