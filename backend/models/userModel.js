import mongoose from 'mongoose';

const levelProgressSchema = mongoose.Schema({
  level_id: {
    type: String,
    required: true,
  },
  isCurrentLevel: {
    type: String,
    required: true,
  },
  totalTasks: {
    type: Number,
    required: true,
  },
  completedTasks: {
    type: [String],
    required: true,
  },
  remainingTasks: {
    type: [String],
    required: true,
  },
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    currentTask: {
      type: String,
      required: false,
      default: '0',
    },
    currentLevel: {
      type: String,
      required: false,
      default: '0',
    },
    roadmap: {
      type: [levelProgressSchema],
      required: false,
      default: [
        {
          level_id: '625f9da04dccbbd952db52a3',
          isCurrentLevel: true,
          totalTasks: 4,
          completedTasks: [],
          remainingTasks: [
            '625f97b0695041b1f4e5db69',
            '625f97b0695041b1f4e5db6c',
            '625f97b0695041b1f4e5db6f',
            '625f97b0695041b1f4e5db73',
          ],
        },
        {
          level_id: '625f9da04dccbbd952db52a4',
          isCurrentLevel: false,
          totalTasks: 3,
          completedTasks: [],
          remainingTasks: [
            '625f97b0695041b1f4e5db73',
            '625f97b0695041b1f4e5db75',
            '625f97b0695041b1f4e5db78',
          ],
        },
        {
          level_id: '625f9da04dccbbd952db52a5',
          isCurrentLevel: false,
          totalTasks: 4,
          completedTasks: [],
          remainingTasks: [
            '625f97b0695041b1f4e5db73',
            '625f97b0695041b1f4e5db7b',
            '625f97b0695041b1f4e5db7d',
            '625f97b0695041b1f4e5db78',
          ],
        },
        {
          level_id: '625f9da04dccbbd952db52a6',
          isCurrentLevel: false,
          totalTasks: 3,
          completedTasks: [],
          remainingTasks: [
            '625f97b0695041b1f4e5db73',
            '625f97b0695041b1f4e5db7b',
            '625f97b0695041b1f4e5db7d',
          ],
        },
      ],
    },
    completedTasks: {
      type: [String],
      required: false,
    },
    motivation: {
      type: [String],
      required: false,
    },
  },
  {
    timestaps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
