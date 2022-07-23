const express = require('express');
const Character = require('../models/character');

const characterRouter = express.Router();

//get all
characterRouter.get('/', (req, res, next)=>{
    Character.find((err, characters)=>{
        if(err){
            res.status(500);
            return next(err);
        }

        res.status(200).send(characters);
    })
})

//post 
characterRouter.post('/', (req, res, next)=>{
    const newCharacter = new Character(req.body);

    newCharacter.save((err, charcater)=>{
        if(err){
            res.status(500);
            return next(err);
        }

        res.status(201).send(charcater);
    })
})

characterRouter.put('/:characterId', (req, res, next)=>{
    const id = req.params.characterId;

    Character.findByIdAndUpdate(
        {_id : id},
        req.body,
        {new : true},
        (err, updated)=>{
        if(err){
            res.status(500);
            return next(err);
        }

        res.status(200).send(updated);
    })
})

//delete
characterRouter.delete('/:characterId', (req, res, next)=>{
    const id = req.params.characterId;
    Character.findByIdAndDelete({_id : id}, (err, character)=>{
        if(err){
            res.status(500);
            return next(err);
        }

        res.status(201).send(character);
    })
})

//delete all
characterRouter.delete('/', (req, res, next)=>{
    Character.deleteMany({}, (err, data)=>{
        if(err){
            res.status(500);
            return next(err);
        }

        res.status(200).send('The application has been reset');
    })
})

module.exports = characterRouter;