const mongoose = require("mongoose");

const feesHistorySchema = mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    feeType: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, required: true },
    remarks: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FeesHistory", feesHistorySchema);
