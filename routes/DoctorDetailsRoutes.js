const express = require("express");
const router = express.Router();
const { registerDoctor } = require("../controllers/DoctorsDetailsController");

// Doctor registration route
router.post("/register", registerDoctor);

module.exports = router;