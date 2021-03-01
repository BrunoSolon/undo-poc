import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  job: String,
  excluded: {
    type: Boolean,
    default: false,
  },
}, {
  timestamp: true,
});

export default mongoose.model('Person', personSchema);
