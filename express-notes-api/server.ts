import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

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

async function write(data: Data): Promise<void> {
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
}

type Error = {
  error: string;
};

const errorCM = 'Content Missing';
const errorNeID = 'Negative ID';
const errorNoID = 'ID Missing';
const errorMC = 'Multiple Contents';

function errorMessage(error: string): Error {
  switch (error) {
    case errorCM:
      return { error: 'content is a required field' };
    case errorNeID:
      return { error: 'ID must be a positive integer' };
    case errorNoID:
      return { error: 'The specific ID does not exist' };
    case errorMC:
      return { error: 'Only one content is allowed' };
    default:
      return { error: 'Unexpected Error' };
  }
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
    const error = errorMessage(errorNeID);
    res.status(400).json(error);
    return;
  }
  if (!contentObj.notes[id]) {
    const error = errorMessage(errorNoID);
    res.status(404).json(error);
    return;
  }
  res.json(contentObj.notes[id]);
});

app.post('/api/notes', async (req, res) => {
  const contentObj = await read();
  if (!req.body.content) {
    const error = errorMessage(errorCM);
    res.status(400).json(error);
    return;
  }
  if (Object.keys(req.body).length !== 1) {
    const error = errorMessage(errorMC);
    res.status(400).json(error);
    return;
  }
  const addedObj = req.body;
  addedObj.id = contentObj.nextId;
  contentObj.notes[contentObj.nextId] = addedObj;
  contentObj.nextId++;
  await write(contentObj);
  res.status(201).send(addedObj);
});

app.delete('/api/notes/:id', async (req, res) => {
  const contentObj = await read();
  const id = req.params.id;
  if (+id < 0 || Number.isNaN(+id)) {
    const error = errorMessage(errorNeID);
    res.status(400).json(error);
    return;
  }
  if (!contentObj.notes[id]) {
    const error = errorMessage(errorNoID);
    res.status(404).json(error);
    return;
  }
  delete contentObj.notes[id];
  await write(contentObj);
  res.sendStatus(204);
});

app.put('/api/notes/:id', async (req, res) => {
  const contentObj = await read();
  const id = req.params.id;
  if (+id < 0 || Number.isNaN(+id)) {
    const error = errorMessage(errorNeID);
    res.status(400).json(error);
    return;
  }
  if (!req.body.content) {
    const error = errorMessage(errorCM);
    res.status(400).json(error);
    return;
  }
  if (!contentObj.notes[id]) {
    const error = errorMessage(errorNoID);
    res.status(404).json(error);
    return;
  }
  contentObj.notes[id] = req.body;
  contentObj.notes[id].id = +id;
  await write(contentObj);
  res.status(200).json(contentObj.notes[id]);
});

app.listen(8080, () => {
  console.log('Listening on 8080');
});
