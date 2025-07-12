const News = require('../models/news.model');
const axios = require('axios');
const nodemailer = require('nodemailer');

exports.renderHome = async (req, res) => {
    const latestNews = await News.find({}).sort({ date: -1 }).limit(3);
    res.render('home', { latestNews });
};

exports.renderSports = async (req, res) => {
    const sportsNews = await News.find({ category: 'sports' }).sort({ date: -1 });
    res.render('sports', { sportsNews });
};

exports.renderAbout = (req, res) => {
    res.render('about');
};

exports.renderContact = (req, res) => {
    res.render('contact');
};

exports.sendContactEmail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    await transporter.sendMail({
        from: req.body.email,
        to: process.env.EMAIL,
        subject: 'Contact Query',
        text: req.body.message
    });

    res.send("Message sent!");
};

exports.getWeather = async (req, res) => {
    const { lat, lon } = req.query;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                lat,
                lon,
                appid: process.env.API_KEY,
                units: 'metric'
            }
        });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Weather fetch failed' });
    }
};

exports.renderChat = (req, res) => {
    res.render('chat');
};
