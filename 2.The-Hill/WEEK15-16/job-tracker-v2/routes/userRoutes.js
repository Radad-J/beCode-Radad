const express = require('express');
const { registerUser, loginUser, logoutUser, getProfile, updateProfile, changePassword } = require('../controllers/userController');
const {uploadFields} = require("../utils/cloudinary");
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', uploadFields, registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
router.post('/logout', protect, logoutUser);
router.put('/changePassword', protect, changePassword);

module.exports = router;
