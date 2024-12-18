const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { roleMiddleware } = require("../middleware/roleMiddleware");
const {
  createLibraryRecord,
  getLibraryHistory,
  updateLibraryRecord,
  deleteLibraryRecord,
} = require("../controllers/libraryController");

router
  .route("/")
  .get(protect, roleMiddleware(["Admin", "Librarian"]), getLibraryHistory)
  .post(protect, roleMiddleware(["Admin", "Librarian"]), createLibraryRecord);

router
  .route("/:id")
  .put(protect, roleMiddleware(["Admin", "Librarian"]), updateLibraryRecord)
  .delete(protect, roleMiddleware(["Admin", "Librarian"]), deleteLibraryRecord);

module.exports = router;
