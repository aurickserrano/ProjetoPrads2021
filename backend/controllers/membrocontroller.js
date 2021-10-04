const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId
var { Membro } = require('../models/membro.js');


// => localhost:3000/Membro/

//getters
router.get('/',(req,res)=>{
    Membro.find((err,docs)=>{
        if(!err){res.send(docs);}
        else {console.log('Error in Retriving Membro:' + JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with given id: ${req.params.id}`);

    Membro.findById(req.params.id, (err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in Retriving Membro:' + JSON.stringify(err,undefined,2));}
    });
})


//Posts
router.post('/',(req,res)=>{
    var emp = new Membro ({
        usuario:req.body.usuario,
        senha:req.body.senha,
        posicao:req.body.posicao,
    });
    emp.save((err,doc)=>{
        if (!err){res.send(doc);}
        else {console.log('Error in Membro Save:'+ JSON.stringify(err,undefined,2));}
    });
});

//PUT

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    var emp = {

        usuario:req.body.usuario,
        senha:req.body.senha,
        posicao:req.body.posicao,
    };

    Membro.findByIdAndUpdate(req.params.id,{$set:emp},{new: true},(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in Employee Update:'+ JSON.stringify(err,undefined,2));}
    });

        
});

router.delete('/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id:${req.params.id}`);

    Membro.findByIdAndRemove(req.params.id, (err,doc)=>{
        if (!err){res.send(doc);}
        else{console.log('Error in Employee Delete:'+ JSON.stringify(err,undefined,2));}
    });
})

module.exports = router;