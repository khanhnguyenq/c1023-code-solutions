import fs from 'node:fs/promises';

async function readSelected(): Promise<void> {
  try {
    const inputs = process.argv.slice(2);
    const concatFiles = inputs.map((file) => fs.readFile(`${file}`, 'utf-8'));
    console.log(
      'Concatenated Files:',
      '\n',
      (await Promise.all(concatFiles)).join()
    );
  } catch (err) {
    console.log('Error:', err);
  }
}

readSelected();
