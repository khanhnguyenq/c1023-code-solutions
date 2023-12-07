function convertMinutesToSeconds(minutes) {
  var result = minutes * 60;
  return result;
}
var fiveMinutes = convertMinutesToSeconds(5);
console.log('value of fiveMinutes:', fiveMinutes);
function greet(name) {
  return 'Hello, '.concat(name, '!');
}
var greetKhanh = greet('Khanh');
console.log('greetKhanh:', greetKhanh);
function getArea(width, height) {
  return width * height;
}
var squareArea = getArea(5, 5);
console.log('squareArea:', squareArea);
function getFirstName(person) {
  var personFirstName = person.firstName;
  return personFirstName;
}
console.log(
  'person first name:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);
function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
console.log(
  'lastElement:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
