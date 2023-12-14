import { writeFile } from 'node:fs/promises';

const ranNum = Math.random().toString().concat('\n');

try {
  await writeFile('random.txt', ranNum, 'utf8');
} catch (err) {
  console.log('Error:', err);
}
