var express = require('express');
var playlistRouter  = express.Router();
var Playlist = require('../models/playlist-model');
const Song = require('../models/song-model');
const Genre = require('../models/genre-model');
const Artist = require('../models/artist-model');
playlistRouter.get('/',(req,res)=>{
    Playlist.findAll({include: [
                    {
                      model: Song,
                      include: [Artist,Genre]
                    }
          ]}).then((playlist)=>{
            res.send(playlist)
        })
        })

playlistRouter.post('/',(req,res)=>{
    Playlist.create({title:req.body.playlist}).then((playlist)=>{
           Song.findOrCreate({where:{title:req.body.song,youtube_url: req.body.url}})
          .then(songInfo=>{
            console.log('song id:',songInfo[0].dataValues.id)
            playlist.addSongs([songInfo[0].dataValues.id])
          })

  }).then(playlist=>{res.send(playlist)})
});
module.exports = playlistRouter;
