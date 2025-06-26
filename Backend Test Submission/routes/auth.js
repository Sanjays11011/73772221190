const express = require('express');
const { register, login, sample } = require('../controllers/logging');
const { verifyToken } = require('../middleware/authentication');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/sample', verifyToken,sample);

module.exports = router;
