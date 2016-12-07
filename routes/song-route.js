var express = require('express');
var songRouter  = express.Router();
var Song = require('../models/song-model');
var Artist =require('../models/artist-model');
var Genre =require('../models/genre-model');

    // GET all songs with genre and artist information fully populated
    songRouter.get('/',(req,res)=>{
        Song.findAll({include:[Artist,Genre]}).then((song)=> {res.send(song)});
    })

    // GET specific song by id
    songRouter.get('/:id',(req,res)=>{
        Song.findById(req.params.id,{include:[Artist,Genre]}).then(song=>{res.send(song)});
    })

    // POST (create) a new song

songRouter.post('/',(req,res)=>{
    Artist.findOrCreate({where:{name:req.body.artist}}).then(artistInfo=>{
        console.log('artistInfo ',artistInfo)
        Song.create({
                      title:req.body.title,
                      youtube_url:req.body.url,
                      artistId: artistInfo[0].dataValues.id
                    }).then(songInfo=>{
                            Genre.findOrCreate({where:{title: req.body.genre1}})
                                    .then(genreInfo1=>{
                                      console.log('genre1 id:',genreInfo1[0].dataValues.id)
                                      console.log('song Info;',songInfo);
                                      songInfo.addGenres([genreInfo1[0].dataValues.id])

                                    })
                                })
    }).then(song=>res.send(song));
});

    // DELETE a specific song by id
    songRouter.delete('/:id',(req,res)=>{
        Song.destroy({where:{id:req.params.id}}).then(song=>{res.send(song)});
    });

    // PUT (update) a specific song's title
    songRouter.put('/:id/:newTitle',(req,res)=>{
        Song.findById(req.params.id).then(song=>{
            return song.update({title:req.params.newTitle})
    }).then(song=>{res.send(song)})
    });

    module.exports = songRouter;
