import mongoose from 'mongoose';

const levelSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'Task',
  },
});

const Level = mongoose.model('Level', levelSchema);

export default Level;
