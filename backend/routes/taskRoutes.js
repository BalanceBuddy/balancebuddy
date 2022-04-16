import express from 'express';
import asyncHandler from 'express-async-handler';
import Task from '../models/taskModel.js';
const router = express.Router();

// @desc    Fetch all tasks
// @route   GET /api/tasks
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const tasks = await Task.find({});
    res.json(tasks);
  })
);

// @desc    Fetch single tasks
// @route   GET /api/tasks/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404);
      throw new Error('Task not found');
    }
  })
);

export default router;
