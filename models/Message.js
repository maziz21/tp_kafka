const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  value: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', messageSchema);
