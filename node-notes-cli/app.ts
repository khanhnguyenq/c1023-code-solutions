import { writeFile, readFile } from 'node:fs/promises';

const operation: string = process.argv[2];

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

const obj: Data = JSON.parse(await readFile('data.json', 'utf8'));
async function updateJSON(): Promise<void> {
  await writeFile('data.json', JSON.stringify(obj));
}

try {
  switch (operation) {
    case 'read':
      await read();
      break;
    case 'create':
      await create();
      break;
    case 'update':
      await update();
      break;
    case 'delete':
      await remove();
      break;
    default:
      console.log('Invalid Operation');
      process.exit(1);
  }
} catch (err) {
  console.log('Error:', err);
}

async function read(): Promise<void> {
  for (const x in obj.notes) {
    console.log(`${x}: ${obj.notes[x]}`);
  }
}

async function create(): Promise<void> {
  const note: string = process.argv[3];
  obj.notes[obj.nextId] = note.toString();
  obj.nextId++;
  updateJSON();
}

async function update(): Promise<void> {
  const number: number = +process.argv[3];
  const newNote: string = process.argv[4];
  obj.notes[number] = newNote;
  updateJSON();
}

async function remove(): Promise<void> {
  const number = +process.argv[3];
  delete obj.notes[number];
  updateJSON();
}
