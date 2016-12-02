var express = require('express');
var songRouter  = express.Router();
var Song = require('../models/song-model');

songRouter.route('/',(req,res)=>{
    song.findAll().then((song)=>{
    res.send(song)
})
})

module.exports = songRouter;