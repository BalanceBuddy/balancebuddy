import express from 'express';
import asyncHandler from 'express-async-handler';
import Level from '../models/levelModel.js';
const router = express.Router();

// @desc    Fetch all levels
// @route   GET /api/levels
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const levels = await Level.find({});
    res.json(levels);
  })
);

// @desc    Fetch single level
// @route   GET /api/levels/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const level = await Level.findById(req.params.id);
    if (level) {
      res.json(level);
    } else {
      res.status(404);
      throw new Error('Level not found');
    }
  })
);

export default router;
