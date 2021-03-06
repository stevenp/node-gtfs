const mongoose = require('mongoose');

const Frequencies = mongoose.model('Frequencies', new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  agency_key: {
    type: String,
    required: true,
    index: true
  },
  trip_id: {
    type: String,
    required: true,
    index: true
  },
  start_time: {
    type: String,
    required: true
  },
  start_timestamp: {
    type: Number
  },
  end_time: {
    type: String,
    required: true
  },
  end_timestamp: {
    type: Number
  },
  headway_secs: {
    type: Number,
    required: true,
    min: 0
  },
  exact_times: {
    type: Number,
    min: 0,
    max: 1
  }
}));

module.exports = Frequencies;
