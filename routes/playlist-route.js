var express = require('express');
var playlistRouter  = express.Router();
var Playlist = require('../models/playlist-model');

// GET all playlists with song information fully populated
    playlistRouter.get('/',(req,res)=>{
        Playlist.findAll().then((playlist)=>{
        res.send(playlist)
    })
    })

// GET a specific playlist by id
    playlistRouter.get('/:id',(req,res)=>{
        Playlist.findById(req.params.id).then((playlist)=>{
        res.send(playlist)
    })
    })

// POST (create) a new playlist

    playlistRouter.post('/',(req,res)=>{
        Playlist.create({title:req.body.title}).then((playlist)=>{
        res.send(playlist)
    })
    })

// DELETE a playlist by id

    playlistRouter.post('/:id',(req,res)=>{
        Playlist.destroy({where:{id:req.params.id}}).then(playlist=>{
            res.send(playlist)
    })
    })


module.exports = playlistRouter;