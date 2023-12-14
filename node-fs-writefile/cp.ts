import { readFile, writeFile } from 'node:fs/promises';

const original = process.argv[2];
const newFile = process.argv[3];

try {
  const content = await readFile(`${original}`, 'utf8');
  await writeFile(`${newFile}`, content, 'utf-8');
} catch (err) {
  console.log('Error:', err);
}
