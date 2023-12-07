interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Khanh',
  lastName: 'Nguyen',
  age: 29,
};

const fullName: string = `${student.firstName} ${student.lastName}`;

console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Vendor Management';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('student obj:', student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'Mazda',
  model: 'RX-7',
  year: 1997,
};

vehicle['color'] = 'orange';
vehicle['isConvertible'] = false;

console.log('color of vehicle:', vehicle['color']);
console.log('isConvertible?', vehicle['isConvertible']);
console.log('vehicle obj:', vehicle);

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'Hashbrown',
  kind: 'dog',
};

delete pet.name;
delete pet.kind;

console.log('pet obj:', pet);
