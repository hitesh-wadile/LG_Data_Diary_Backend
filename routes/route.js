const express = require('express');
const router = express.Router();
const {home, login, register} = require("../controllers/userController")

router.get('/', home);
router.get('/login', login);
router.get('/register', register);

module.exports = router;