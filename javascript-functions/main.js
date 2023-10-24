function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('convertMinutesToSeconds:', convertMinutesToSeconds(10));

function greet(name) {
  return `Hey, ${name}!`;
}

console.log('greet:', greet('Khanh'));

function getArea(w, h) {
  return w * h;
}

console.log('getArea:', getArea(7, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log(
  'getFirstName:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(
  'getLastElement:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
