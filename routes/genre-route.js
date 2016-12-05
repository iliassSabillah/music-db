var express = require('express');
var genreRouter  = express.Router();
var Genre = require('../models/genre-model');

// GET all genres, ordered a-z

    genreRouter.get('/',(req,res)=>{
        Genre.findAll().then((genre)=>{
        res.send(genre)
        })
    })


// GET a specific genre by id

genreRouter.get('/:id',(req,res)=>{
    Genre.findById(req.params.id).then(genre=>{res.send(genre)})
})


// POST (create) a new genre
genreRouter.post('/',(req,res)=>{
    Genre.create({where:{title:req.body.title}})
        .then(genre=>{ res.send(genre)})
})

// PUT (update) a specific genre's name

genreRouter.put('/:id/:newGenre',(req,res)=>{
    Genre.findOne({where:{id:req.params.id}})
    .then(genre=>{ res.update({title:req.params.newGenre})}).then(genre=>{res.send(genre)})
})

// /api/genres/

module.exports = genreRouter;
