const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  googleLogin,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/google-login', googleLogin);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;
