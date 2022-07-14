const express = require("express");
const authCountroller = require("../controllers/authController");
const router = express.Router();
router.post("/signup", authCountroller.signUp);
router.post("/login", authCountroller.login);
module.exports = router;
