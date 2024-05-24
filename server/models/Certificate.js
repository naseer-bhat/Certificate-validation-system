const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  certificateNumber: { type: String, required: true},
  studentName: { type: String },
  institutionName: { type: String },
  courseName: { type: String },
  issueDate: { type: String }




//   path: { type: String, required: true },
});



module.exports = mongoose.model('Certificate', certificateSchema);







