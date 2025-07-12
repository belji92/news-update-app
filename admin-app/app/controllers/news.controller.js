const News = require('../models/news.model');

exports.dashboard = async (req, res) => {
    const news = await News.find().sort({ date: -1 });
    res.render('data-list', { news });
};

exports.addNewsPage = (req, res) => res.render('add-news');

exports.addNews = async (req, res) => {
    const { title, content, category, imageUrl } = req.body;
    await News.create({ title, content, category, imageUrl });
    res.redirect('/dashboard');
};

exports.deleteNews = async (req, res) => {
    await News.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard');
};
