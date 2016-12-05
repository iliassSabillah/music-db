const express = require('express');
var artistRouter  = express.Router();
var Artist = require('../models/artist-model');


artistRouter.get('/',(req,res)=>{
    Artist.findAll().then((artists)=>{
        res.send(artists)
    })
})

artistRouter.get('/:id',(req,res)=>{
    // Artist.findOne({where:{id:req.params.id}}).then((artist)=>{
    Artist.findById(req.params.id).then((artist)=>{
    res.send(artist)
})
})

artistRouter.post('/',(req,res)=>{
    Artist.create({name:req.body.name}).then((artist)=>{
    res.send(artist)
})
})

artistRouter.delete('/:id',(req,res)=>{
    Artist.destroy({where:{id:req.params.id}}).then((artist)=>{
    // Artist.findById(req.params.id).then((artist)=>{
    res.send(artist)
})
})

artistRouter.put('/:id/:newName',(req,res)=>{
    Artist.findOne({where:{id:req.params.id}}).then(artist=>{
        return artist.update({name:req.params.newName})
    }).then((artist)=>{
            res.send(artist)
})
})


module.exports = artistRouter;