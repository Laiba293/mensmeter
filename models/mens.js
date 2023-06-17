const mongoose = require("mongoose");
const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: string,
    required: true,
    trim: true,
  },
  dob: {
    type: data,
    required: true,
    trim: true,
  },
  country: {
    type: string,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
  },
  event: {
    type: string,
    default: "100m",
  },
});
// we are creating a new collection
const MensRanking = new mongoose.model("MenRanking", menSchema);
 
module.exports = MensRanking;