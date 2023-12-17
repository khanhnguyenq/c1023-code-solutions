import express from 'express';
import { readFile } from 'node:fs/promises';

type Note = {
  id: number;
  note: string;
};

const app = express();
app.use(express.json());

app.get('/api/notes', async (req, res) => {
  const content: string = await readFile('data.json', 'utf8');
  const contentObj = JSON.parse(content);
  const notesArray: Note[] = [];
  for (const x in contentObj.notes) {
    notesArray.push(contentObj.notes[x]);
  }
  res.json(notesArray);
});

app.listen(8080, () => {
  console.log('Listening on 8080');
});
