const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news.controller');

// Home page (weather + latest news)
router.get('/', newsController.renderHome);

// Sports
router.get('/sports', newsController.renderSports);

// About Us
router.get('/about', newsController.renderAbout);

// Contact Us
router.get('/contact', newsController.renderContact);
router.post('/contact', newsController.sendContactEmail);

// Weather API
router.get('/weather', newsController.getWeather);

// Chat page
router.get('/chat', newsController.renderChat);

module.exports = router;
