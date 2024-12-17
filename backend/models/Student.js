const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  fatherName: { type: String },
  place: { type: String },
  dob: { type: Date },
  feesPaid: { type: Boolean, default: false },
  libraryHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "LibraryHistory" }],
  feesHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "FeesHistory" }],
});

module.exports = mongoose.model("Student", studentSchema);
