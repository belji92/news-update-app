// shared/News.js

const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date
});

module.exports = mongoose.model('News', NewsSchema);
