const express = require("express");
const { registerAdmin, loginUser, registerUser } = require("../controllers/authController");

const router = express.Router();

router.post('/register-admin', registerAdmin);
router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
