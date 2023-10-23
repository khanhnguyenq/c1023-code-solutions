const student = {
  firstName: 'Khanh',
  lastName: 'Nguyen',
  age: '28',
};
const fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Vendor Management';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);

const vehicle = {
  make: 'Mazda',
  model: 'RX-7',
  year: 1997,
};

vehicle['color'] = 'orange';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

const pet = {
  name: 'Hashbrown',
  type: 'dog',
};

delete pet['name'];
delete pet.type;

console.log('value of pet: ', pet);
