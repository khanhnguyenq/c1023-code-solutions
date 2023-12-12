import { sum } from './add.js';
import { difference } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const operation = process.argv[3];
const arg1 = +process.argv[2];
const arg2 = +process.argv[4];

let result: number;

if (Number.isNaN(arg1)) {
  console.log(`${process.argv[2]} is not a number.`);
  process.exit(1);
}

if (Number.isNaN(arg2)) {
  console.log(`${process.argv[4]} is not a number.`);
  process.exit(1);
}

if (operation === 'plus') {
  result = sum(arg1, arg2);
} else if (operation === 'minus') {
  result = difference(arg1, arg2);
} else if (operation === 'times') {
  result = multiply(arg1, arg2);
} else if (operation === 'divide') {
  result = divide(arg1, arg2);
} else {
  console.log('invalid operation');
  process.exit(1);
}

console.log('result:', result);

// instructor's answer
// import { add } from './add.js';
// import { subtract } from './subtract.js';
// import { multiply } from './multiply.js';
// import { divide } from './divide.js';
// const arg1 = +process.argv[2];
// const operator = process.argv[3];
// const arg2 = +process.argv[4];
// if (Number.isNaN(arg1)) {
//   console.log(`${process.argv[2]} is not a number`);
//   process.exit(1);
// }
// if (Number.isNaN(arg2)) {
//   console.log(`${process.argv[4]} is not a number`);
//   process.exit(1);
// }
// let result: number;
// switch (operator) {
//   case 'plus':
//     result = add(arg1, arg2);
//     break;
//   case 'minus':
//     result = subtract(arg1, arg2);
//     break;
//   case 'times':
//     result = multiply(arg1, arg2);
//     break;
//   case 'over':
//     result = divide(arg1, arg2);
//     break;
//   default:
//     console.log('invalid operator');
//     process.exit(1);
// }
// console.log('result:', result);
