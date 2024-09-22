// routes/auth.js
const express = require('express');
const { register, login, protected } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', protect, protected);

module.exports = router;
