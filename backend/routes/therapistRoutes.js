const express = require('express');
const router = express.Router();
const {
    getAllTherapist, registerUser, getMe
} = require('../controllers/therapistController');
const { protect } = require('../middleware/authMiddleware');


router.get('/', getAllTherapist);
router.post('/', registerUser);
router.get('/:id', getMe)
module.exports = router;
