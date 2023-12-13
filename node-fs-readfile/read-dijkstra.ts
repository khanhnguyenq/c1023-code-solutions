import fs from 'node:fs/promises';

async function logFile(): Promise<void> {
  try {
    const content = await fs.readFile('dijkstra.txt', 'utf-8');
    console.log('Content of file:', '\n', content);
  } catch (error) {
    console.log(error);
  }
}

logFile();
