const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  googleLogin,
  getAllUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.get('/', protect, getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

router.post('/google-login', googleLogin);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;
