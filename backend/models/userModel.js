import mongoose from 'mongoose';

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
