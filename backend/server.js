import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import levels from './data/levels.js';
import taskRoutes from './routes/taskRoutes.js';
import userRoutes from './routes/userRoutes.js';
import levelRoutes from './routes/levelRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

dotenv.config();

await connectDB();

const app = express();

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/levels', levelRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/user', userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
