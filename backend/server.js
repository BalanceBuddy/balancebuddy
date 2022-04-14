import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
// import connectDB from './config/db.js';
import tasks from './data/tasks.js';
import levels from './data/levels.js';

dotenv.config();

// connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/api/tasks/:_id', (req, res) => {
  const task = tasks.find((x) => x._id === req.params._id);
  res.json(task);
});

app.get('/api/level/:level', (req, res) => {
  const levelTasks = levels.find((x) => x.level === req.params.level);
  res.json(levelTasks);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
