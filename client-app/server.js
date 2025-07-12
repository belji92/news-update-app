require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const newsRoutes = require('./app/routes/news.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('cookie-parser')());
app.use(require('cors')());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error(err));

// Routes
app.use('/', newsRoutes);

// Socket.IO for chat
io.on('connection', socket => {
    console.log('User connected');
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Client app running on port ${PORT}`);
});

