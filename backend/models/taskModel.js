import mongoose from 'mongoose';

const resourceSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  resources: [resourceSchema],
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
