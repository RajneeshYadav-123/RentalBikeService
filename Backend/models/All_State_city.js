const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  _id: String, 
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('State', stateSchema);
