function convertMinutesToSeconds(minutes: number): number {
  const result: number = minutes * 60;
  return result;
}

const fiveMinutes: number = convertMinutesToSeconds(5);
console.log('value of fiveMinutes:', fiveMinutes);

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greetKhanh: string = greet('Khanh');
console.log('greetKhanh:', greetKhanh);

function getArea(width: number, height: number): number {
  return width * height;
}

const squareArea: number = getArea(5, 5);
console.log('squareArea:', squareArea);

interface Person {
  firstName: string;
  lastName: string;
}

function getFirstName(person: Person): string {
  const personFirstName: string = person.firstName;
  return personFirstName;
}

console.log(
  'person first name:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array: string[]): string {
  const lastElement: string = array[array.length - 1];
  return lastElement;
}

console.log(
  'lastElement:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
