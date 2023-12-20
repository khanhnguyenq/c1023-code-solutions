import express from 'express';
import pg from 'pg';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = 'select * from "grades"';
    const data = await db.query(sql);
    const result = data.rows;
    res.json(result);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (Number.isNaN(gradeId) || !Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, "'gradeId' must be a positive integer");
    }
    const sql = 'select * from "grades" where "gradeId" = $1';
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(
        404,
        `Cannot find grade with 'gradeId': ${gradeId}`
      );
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const inputKeys = Object.keys(req.body);
    if (inputKeys.length < 3) {
      throw new ClientError(400, 'too few arguments');
    }
    if (inputKeys.length > 3) {
      throw new ClientError(400, 'too many arguments');
    }
    if (!inputKeys.includes('name')) {
      throw new ClientError(400, 'name is missing from the input');
    }
    if (!inputKeys.includes('course')) {
      throw new ClientError(400, 'course is missing from the input');
    }
    if (!inputKeys.includes('score')) {
      throw new ClientError(400, 'score is missing from the input');
    }
    const inputScore = +req.body.score;
    if (
      Number.isNaN(inputScore) ||
      !Number.isInteger(inputScore) ||
      inputScore < 0
    ) {
      throw new ClientError(
        400,
        'score must have a positive integer as a value'
      );
    }
    const sql =
      'INSERT INTO "grades" ("course", "name", "score") VALUES($1, $2, $3) RETURNING *';
    const params = Object.values(req.body);
    const result = await db.query(sql, params);
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = +req.params.gradeId;
    if (Number.isNaN(gradeId) || !Number.isInteger(gradeId) || gradeId < 0) {
      throw new ClientError(400, "'gradeId' must be a positive integer");
    }
    const inputKeys = Object.keys(req.body);
    if (inputKeys.length < 3) {
      throw new ClientError(400, 'too few arguments');
    }
    if (inputKeys.length > 3) {
      throw new ClientError(400, 'too many arguments');
    }
    if (!inputKeys.includes('name')) {
      throw new ClientError(400, 'name is missing from the input');
    }
    if (!inputKeys.includes('course')) {
      throw new ClientError(400, 'course is missing from the input');
    }
    if (!inputKeys.includes('score')) {
      throw new ClientError(400, 'score is missing from the input');
    }
    const sql =
      'UPDATE "grades" SET "name" = $1, "course" = $2, "score" = $3 WHERE "gradeId" = $4 RETURNING *';
    const values = req.body;
    const params = [values.name, values.course, values.score, gradeId];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(
        404,
        `Cannot find grade with 'gradeId': ${gradeId}`
      );
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = +req.params.gradeId;
    if (Number.isNaN(gradeId) || !Number.isInteger(gradeId) || gradeId < 0) {
      throw new ClientError(400, "'gradeId' must be a positive integer");
    }
    const sql = 'DELETE FROM "grades" WHERE "gradeId" = $1 RETURNING *';
    const params = [gradeId];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(
        404,
        `Cannot find grade with 'gradeId': ${gradeId}`
      );
    }
    res.status(204).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listen on 8080');
});
