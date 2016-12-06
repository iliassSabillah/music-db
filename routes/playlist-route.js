var express = require('express');
var playlistRouter  = express.Router();
var Playlist = require('../models/playlist-model');


playlistRouter.route('/',(req,res)=>{
    Playlist.findAll().then((playlist)=>{
    res.send(playlist)
})
})

module.exports = playlistRouter;