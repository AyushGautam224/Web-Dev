const mongoose = require('mongoose');

const majdoorSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean
});

const majdoor = mongoose.model('majdoor', majdoorSchema);

module.exports = majdoor;   // <-- equal sign required
