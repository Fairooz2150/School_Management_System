const express = require("express");
const {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getStudents).post(protect, createStudent);
router
  .route("/:id")
  .put(protect, updateStudent)
  .delete(protect, deleteStudent);

module.exports = router;
