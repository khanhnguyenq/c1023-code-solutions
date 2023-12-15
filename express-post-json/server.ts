import express from 'express';

let nextId: number = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const added = req.body;
  grades[nextId] = added;
  added.id = nextId;
  nextId++;
  res.status(201).send(added);
});

app.listen(8080, () => {
  console.log('Listening on 8080');
});
