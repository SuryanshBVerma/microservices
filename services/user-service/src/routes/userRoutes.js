const express = require('express');
const { register, login, getUser } = require('../controllers/userController');
const auth = require('../utils/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', auth, getUser);

module.exports = router;
