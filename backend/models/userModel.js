import mongoose from 'mongoose';

const levelProgressSchema = mongoose.Schema({
  level_id: {
    type: String,
    required: true,
  },
  isCurrentLevel: {
    type: String,
    required: true,
    default: false,
  },
  totalTasks: {
    type: Number,
    required: true,
  },
  completedTasks: {
    type: [String],
    required: true,
    default: [],
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
    roadmap: [levelProgressSchema],
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
