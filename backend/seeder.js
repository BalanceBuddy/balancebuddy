import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
// import levels from './data/levels.js'
import tasks from './data/tasks.js';
import users from './data/users.js';
import Level from './models/levelModel.js';
import Task from './models/taskModel.js';
import User from './models/userModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Level.deleteMany();
    await Task.deleteMany();
    await User.deleteMany();

    // await Level.insertMany({
    //   title: 'level1',
    //     tasks: [tasks[0], tasks[1], tasks[2]],
    // });
    // await Level.insertMany({
    //   title: 'level1',
    //     tasks: [tasks[2], tasks[3], tasks[4], tasks[5]],
    // });

    // await Level.insertMany([
    //   {
    //     title: 'level1',
    //     tasks: tasks,
    //   },
    // ]);

    await User.insertMany(users);
    await Task.insertMany(tasks);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Level.deleteMany();
    await Task.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
