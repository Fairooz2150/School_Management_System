const express = require("express");
const {
  getFeesHistory,
  createFeesRecord,
  updateFeesRecord,
  deleteFeesRecord,
} = require("../controllers/feesController");
const { protect } = require("../middleware/authMiddleware");
const { roleMiddleware } = require("../middleware/roleMiddleware");

const router = express.Router();

router
  .route("/")
  .get(protect, roleMiddleware(["Admin", "Office Staff"]), getFeesHistory)
  .post(protect, roleMiddleware(["Admin", "Office Staff"]), createFeesRecord);

router
  .route("/:id")
  .put(protect, roleMiddleware(["Admin", "Office Staff"]), updateFeesRecord)
  .delete(protect, roleMiddleware(["Admin"]), deleteFeesRecord);

module.exports = router;
