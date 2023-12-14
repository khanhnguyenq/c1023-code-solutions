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

switch (operation) {
  case 'read':
    read();
    break;
  case 'create':
    create();
    break;
  case 'update':
    update();
    break;
  case 'delete':
    remove();
    break;
  default:
    throw Error('Invalid Operation');
}

async function read(): Promise<void> {
  try {
    for (const x in obj.notes) {
      console.log(`${x}: ${obj.notes[x]}`);
    }
  } catch (err) {
    console.log('Error:', err);
    process.exit(1);
  }
}

async function create(): Promise<void> {
  try {
    const note: string = process.argv[3];
    obj.notes[obj.nextId] = note.toString();
    obj.nextId++;
    updateJSON();
  } catch (err) {
    console.log('Error:', err);
    process.exit(1);
  }
}

async function update(): Promise<void> {
  try {
    const number: number = +process.argv[3];
    const newNote: string = process.argv[4];
    obj.notes[number] = newNote;
    updateJSON();
  } catch (err) {
    console.log('Error:', err);
    process.exit(1);
  }
}

async function remove(): Promise<void> {
  try {
    const number = +process.argv[3];
    delete obj.notes[number];
    updateJSON();
  } catch (err) {
    console.log('Error:', err);
  }
}
