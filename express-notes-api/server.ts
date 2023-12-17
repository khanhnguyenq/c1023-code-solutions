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
  if (!contentObj.notes[id]) {
    res.status(404).send('ID does not exist');
  } else {
    res.json(contentObj.notes[id]);
  }
});

app.listen(8080, () => {
  console.log('Listening on 8080');
});
