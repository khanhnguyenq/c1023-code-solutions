import express from 'express';
import { readFile } from 'node:fs/promises';

type Note = {
  id: number;
  note: string;
};

type Data = {
  nextId: number;
  notes: Record<string, Note>;
};

const app = express();
app.use(express.json());

async function read(): Promise<Data> {
  const content = await readFile('data.json', 'utf8');
  return JSON.parse(content);
}

app.get('/api/notes', async (req, res) => {
  const contentObj = await read();
  const notesArray: Note[] = [];
  for (const x in contentObj.notes) {
    notesArray.push(contentObj.notes[x]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', async (req, res) => {
  const contentObj = await read();
  const id = req.params.id;
  if (+id < 0) {
    const error = { error: 'ID must be a positive interger' };
    res.status(400).json(error);
    return;
  }
  if (!contentObj.notes[id]) {
    const error = { error: 'ID does not exist' };
    res.status(404).json(error);
    return;
  }
  res.json(contentObj.notes[id]);
});

app.listen(8080, () => {
  console.log('Listening on 8080');
});
