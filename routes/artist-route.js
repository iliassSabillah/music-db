const express = require('express');
const artistRouter  = express.Router();
const Artist = require('../models/artist-model');
const Genre =require('../models/genre-model');


// GET all artists with genre and artist information fully populated
artistRouter.get('/',(req,res)=>{
    Artist.findAll().then((artist)=> {res.send(artist)});
})

// GET specific artist by id
artistRouter.get('/:id',(req,res)=>{
    Artist.findOne({where:{id:req.params.id}})
        .then(artist=>{res.send(artist)});
})

// POST (create) a new artist
artistRouter.post('/',(req,res)=>{
    Artist.create({name: req.body.name})
        .then(newartist=>{res.send(newartist)});
})
// DELETE a specific artist by id
artistRouter.delete('/:id',(req,res)=>{
    Artist.findOne({where:{id:req.params.id}})
        .then((artist)=>{
            return artist.destroy({new:true})
    })
        .then(artist=>{res.send(artist)});
})

// PUT (update) a specific artist's title
artistRouter.put('/:id/:newName',(req,res)=>{
    Artist.findById(req.params.id).then(artist=>{
        return artist.update({name:req.params.newName})
    }).then(artist=>{res.send(artist)})
})


module.exports = artistRouter;