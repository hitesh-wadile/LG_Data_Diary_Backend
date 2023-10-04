const express = require('express');
const router = express.Router();
// const {home, login, register} = require("../controllers/userController")

const {
    login,
    studentSignup,
    sendotp,
  } = require("../controllers/Auth")


router.post("/studentLogin", login)

router.post("/studentSignup", studentSignup)

router.post("/sendotp", sendotp)

module.exports = router;