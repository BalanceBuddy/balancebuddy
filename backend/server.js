import express from 'express';
import dotenv from 'dotenv';
import allTasks from './data/allTasks.js';
import levels from './data/levels.js';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/allTasks', (req, res) => {
  res.json(allTasks);
});

app.get('/api/level/:level', (req, res) => {
  const levelTasks = levels.find((x) => x.level === req.params.level);
  res.json(levelTasks);
});

app.get('/api/allTasks/:task_id', (req, res) => {
  const task = allTasks.find((x) => x.task_id === req.params.task_id);
  res.json(task);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
