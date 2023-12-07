var student = {
  firstName: 'Khanh',
  lastName: 'Nguyen',
  age: 29,
};
var fullName = ''.concat(student.firstName, ' ').concat(student.lastName);
console.log('fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Vendor Management';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('student obj:', student);
var vehicle = {
  make: 'Mazda',
  model: 'RX-7',
  year: 1997,
};
vehicle['color'] = 'orange';
vehicle['isConvertible'] = false;
console.log('color of vehicle:', vehicle['color']);
console.log('isConvertible?', vehicle['isConvertible']);
console.log('vehicle obj:', vehicle);
var pet = {
  name: 'Hashbrown',
  kind: 'dog',
};
delete pet.name;
delete pet.kind;
console.log('pet obj:', pet);
