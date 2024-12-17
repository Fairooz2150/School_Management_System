const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { roleMiddleware } = require("../middleware/roleMiddleware");
const {
  createLibraryRecord,
  getLibraryHistory,
} = require("../controllers/libraryController");

router.post(
  "/",
  protect,
  roleMiddleware(["Admin", "Librarian"]),
  createLibraryRecord
);

router.get(
  "/",
  protect,
  roleMiddleware(["Admin", "Librarian"]),
  getLibraryHistory
);

module.exports = router;
