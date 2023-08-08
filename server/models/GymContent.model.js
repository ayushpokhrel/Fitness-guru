const mongoose = require('mongoose');

const gymContentSchema = new mongoose.Schema({
  gymType: String,
  level: String,
  steps: [{
    stepNumber: Number,
    description: String
  }],
});


const GymContent = mongoose.model('GymContent', gymContentSchema);

module.exports = GymContent;
