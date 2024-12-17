const FeesHistory = require("../models/FeesHistory");

const getFeesHistory = async (req, res) => {
  try {
    const history = await FeesHistory.find().populate("student");
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching fees history", error: error.message });
  }
};

const createFeesRecord = async (req, res) => {
  const { student, feeType, amount, paymentDate, remarks } = req.body;

  try {
    const record = await FeesHistory.create({
      student,
      feeType,
      amount,
      paymentDate,
      remarks,
    });
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ message: "Error creating fees record", error: error.message });
  }
};

const updateFeesRecord = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedRecord = await FeesHistory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(400).json({ message: "Error updating fees record", error: error.message });
  }
};

const deleteFeesRecord = async (req, res) => {
  const { id } = req.params;

  try {
    await FeesHistory.findByIdAndDelete(id);
    res.status(200).json({ message: "Fees record deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting fees record", error: error.message });
  }
};

module.exports = { getFeesHistory, createFeesRecord, updateFeesRecord, deleteFeesRecord };
