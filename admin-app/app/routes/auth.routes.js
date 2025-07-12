const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');

router.get('/register', (req, res) => res.render('register'));
router.post('/register', authCtrl.register);

router.get('/login', (req, res) => res.render('login'));
router.post('/login', authCtrl.login);

router.get('/logout', authCtrl.logout);

module.exports = router;
