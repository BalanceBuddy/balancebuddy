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

    if (user) {
      // get user's currentTask
      const prevTaskId = user.currentTask;

      //go to the current level in the roadmap
      const currentLevel = user.roadmap.find(
        (x) => x.isCurrentLevel === 'true'
      );

      //if there's just one task remaining, return it
      const tasksArray = currentLevel.remainingTasks;
      if (tasksArray.length == 1) {
        res.json(user);
      } else {
        //if there's more than one, return a random task different than the previous one
        var newTaskId =
          tasksArray[Math.floor(Math.random() * tasksArray.length)];
        while (newTaskId == prevTaskId) {
          newTaskId = tasksArray[Math.floor(Math.random() * tasksArray.length)];
        }

        user.currentTask = newTaskId;
        const updatedUser = await user.save();
        res.json(updatedUser);
      }
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
      //get currentTask id
      const completedTask = user.currentTask;

      //go to the current level object
      var level = user.roadmap.find((x) => x.isCurrentLevel === 'true');
      const level_index = user.roadmap.indexOf(level);

      //delete task from remainingTasks
      const completedTask_index = level.remainingTasks.indexOf(completedTask);
      if (completedTask_index > -1) {
        level.remainingTasks.splice(completedTask_index, 1);
      }

      //add task to completedTasks
      level.completedTasks = [...level.completedTasks, completedTask];

      //if there's no remainingTasks, set current level as complete, and go to next
      if (level.remainingTasks.length == 0) {
        level.isCurrentLevel = 'false';
        if (user.roadmap[level_index + 1]) {
          level = user.roadmap[level_index + 1];
          level.isCurrentLevel = 'true';
          user.currentLevel = level.level_id;
        }
      }

      //choose a new random task
      //if there's just one task remaining, return it
      const tasksArray = level.remainingTasks;
      var newTaskId = tasksArray[Math.floor(Math.random() * tasksArray.length)];

      if (tasksArray.length == 1) {
        while (newTaskId == completedTask) {
          newTaskId = tasksArray[Math.floor(Math.random() * tasksArray.length)];
        }
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

export default router;
