const express = require('express');
const router = express.Router();
const newsCtrl = require('../controllers/news.controller');
const auth = require('../middleware/auth');

router.get('/dashboard', auth, newsCtrl.dashboard);
router.get('/add-news', auth, newsCtrl.addNewsPage);
router.post('/add-news', auth, newsCtrl.addNews);
router.get('/delete-news/:id', auth, newsCtrl.deleteNews);

module.exports = router;
