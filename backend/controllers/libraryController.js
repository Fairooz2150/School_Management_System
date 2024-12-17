const LibraryHistory = require("../models/LibraryHistory");

const getLibraryHistory = async (req, res) => {
  try {
    const history = await LibraryHistory.find()
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching library history", error: error.message });
  }
};
const createLibraryRecord = async (req, res) => {
  console.log("Received data:", req.body); // Log the request body
  const { borrowStudent, bookName, issueDate, returnDate, isReturned } = req.body;

  try {
    const record = await LibraryHistory.create({
      student: borrowStudent,
      bookName,
      borrowDate: issueDate,
      returnDate,
      status: isReturned ? 'Returned' : 'Borrowed',
    });
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ message: "Error creating library record", error: error.message });
  }
};


const updateLibraryRecord = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedRecord = await LibraryHistory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(400).json({ message: "Error updating library record", error: error.message });
  }
};

const deleteLibraryRecord = async (req, res) => {
  const { id } = req.params;

  try {
    await LibraryHistory.findByIdAndDelete(id);
    res.status(200).json({ message: "Library record deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting library record", error: error.message });
  }
};

module.exports = {
  getLibraryHistory,
  createLibraryRecord,
  updateLibraryRecord,
  deleteLibraryRecord,
};
