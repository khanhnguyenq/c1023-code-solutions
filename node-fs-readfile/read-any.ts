import fs from 'node:fs/promises';

async function read(): Promise<void> {
  try {
    const fileName = process.argv[2];
    const content = await fs.readFile(`${fileName}`, 'utf-8');
    console.log('Content of file:', '\n', content);
  } catch (err) {
    console.log('Error:', err);
  }
}

read();
