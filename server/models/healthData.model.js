// // models/healthdata.model.js
// const mongoose = require('mongoose');

// const healthDataSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Assuming the user model is named 'User'
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
//   weight: {
//     type: Number,
//     required: true,
//   },
//   heightFeet: {
//     type: Number,
//     required: true,
//   },
//   heightInches: {
//     type: Number,
//     required: true,
//   },
//   bmi: {
//     type: Number,
//     required: true,
//   },
//   bmr: {
//     type: Number,
//     required: true,
//   },
//   programLevel: {
//     type: String,
//     required: true,
//   },
// });

// const HealthData = mongoose.model('healthdata', healthDataSchema);

// module.exports = HealthData;



const mongoose = require('mongoose');

const healthDataSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  age: Number,
  weight: Number,
  heightFeet: Number,
  heightInches: Number,
  bmi: Number,
  bmr: Number,
  programLevel: String,
  gender:String
});

const HealthData = mongoose.model('HealthData', healthDataSchema);

module.exports = HealthData;
