import { sum } from './add.js';
import { difference } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const operation: string = process.argv[3];

if (operation === 'plus') {
  console.log(
    'result:',
    sum(parseInt(process.argv[2]), parseInt(process.argv[4]))
  );
} else if (operation === 'minus') {
  console.log(
    'result:',
    difference(parseInt(process.argv[2]), parseInt(process.argv[4]))
  );
} else if (operation === 'times') {
  console.log(
    'result:',
    multiply(parseInt(process.argv[2]), parseInt(process.argv[4]))
  );
} else if (operation === 'divide') {
  console.log(
    'result:',
    divide(parseInt(process.argv[2]), parseInt(process.argv[4]))
  );
}
