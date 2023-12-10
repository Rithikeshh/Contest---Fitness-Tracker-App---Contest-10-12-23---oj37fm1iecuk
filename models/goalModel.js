const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  //
  target: {
    type: Number,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  type:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Goal', goalSchema);
