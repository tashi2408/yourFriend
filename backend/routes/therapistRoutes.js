const express = require('express');
const router = express.Router();
const {
    getAllTherapist, registerUser
} = require('../controllers/therapistController');
const { protect } = require('../middleware/authMiddleware');


router.get('/', getAllTherapist);
router.post('/', registerUser);

module.exports = router;
