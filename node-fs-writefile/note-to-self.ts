import { writeFile } from 'node:fs/promises';

const note = process.argv[2].concat('\n');

try {
  await writeFile('note.txt', note, 'utf-8');
} catch (err) {
  console.log('Error:', err);
  process.exit(1);
}
