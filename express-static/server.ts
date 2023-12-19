import express from 'express';

const app = express();
app.use(express.json());

const files = express.static('public');

app.use(files);

app.listen(8080, () => {
  console.log('Listening on 8080');
});
