import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Task from '../models/taskModel.js';
const router = express.Router();

// @desc    Fetch single user
// @route   GET /api/user/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error('Task not found');
    }
  })
);

// @desc    Fetch user's currentTask
// @route   GET /api/user/:user_id/current_task
// @access  Public
router.get(
  '/:user_id/current_task',
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.user_id);

    if (user) {
      const currentTaskId = user.currentTask;
      const currentTask = await Task.findById(currentTaskId);
      if (currentTask) {
        res.json(currentTask);
      }
    } else {
      res.status(404);
      throw new Error('Task or user not found');
    }
  })
);

// @desc    Update the user's currentTask to another random task
// @route   PUT /api/user/:user_id/new_random_current_task
// @access  Public
router.get(
  '/:user_id/new_random_current_task',
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.user_id);
    const allTasks = await Task.find({});

    if (user) {
      // get user's currentTask
      const prevTaskId = user.currentTask;

      //choose a new random task
      const newTaskId =
        allTasks[Math.floor(Math.random() * allTasks.length)].id;
      while (newTaskId == prevTaskId) {
        newTaskId = allTasks[Math.floor(Math.random() * allTasks.length)].id;
      }

      user.currentTask = newTaskId;
      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  })
);

// @desc    Update the user's completedTasks to include the users current task, and choose a new current task
// @route   PUT /api/user/:user_id/add_completed_task
// @access  Public
router.get(
  '/:user_id/add_completed_task',
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.user_id);

    if (user) {
      // get user's completedTask
      const prevCompletedTasks = user.completedTasks;
      const prevCurrentTask = user.currentTask;

      //add currentTask to completedTasks
      user.completedTasks = [...prevCompletedTasks, prevCurrentTask];

      //choose a new random task
      const allTasks = await Task.find({});
      const newTaskId =
        allTasks[Math.floor(Math.random() * allTasks.length)].id;
      while (newTaskId == prevCurrentTask) {
        newTaskId = allTasks[Math.floor(Math.random() * allTasks.length)].id;
      }

      //set new task
      user.currentTask = newTaskId;

      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  })
);

export default router;
