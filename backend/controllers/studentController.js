const Student = require("../models/Student");

const getStudents = async (req, res) => {
  try {
    // Fetch all students from the database
    const students = await Student.find();
    res.status(200).json(students);  // Send the list of students as a response
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error: error.message });
  }
};const createStudent = async (req, res) => {
  const { name, age } = req.body;
  const studentClass = req.body.class; // Directly access class

  try {
    const student = await Student.create({
      name,
      age,
      class: studentClass, // Use 'class' here
    });
    res.status(201).json(student); // Send the newly created student as a response
  } catch (error) {
    res.status(400).json({ message: "Error creating student", error: error.message });
  }
};


const updateStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedStudent);  // Return the updated student
  } catch (error) {
    res.status(400).json({ message: "Error updating student", error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    await Student.findByIdAndDelete(id);  // Delete the student by ID
    res.status(200).json({ message: "Student deleted successfully" });  // Return a success message
  } catch (error) {
    res.status(400).json({ message: "Error deleting student", error: error.message });
  }
};

module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
