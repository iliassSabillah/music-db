const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');


//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));

//listen on port 8888
app.listen('9999', () => console.log('Listening on port 9999'));


//////////
// YOUR CODE HERE:
//////////
app.use('/api/artists', require('./routes/index').artistRouter);
app.use('/api/songs', require('./routes/index').songRouter);
app.use('/api/playlist',require('./routes/index').playlistRouter);
app.use('/api/genre', require('./routes/index').genreRouter);
