const {sequelize,Torte,Users,Kolaci,Index,Mafini} = require('../models');
const express = require('express');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended:true}));

route.get('/torte',(req,res)=>{
    Torte.findAll()
    .then(row => res.json(row))
    .catch(err => res.status(500).json(err));
});

route.get('/torte/:id',(req,res)=>{
    Torte.findOne({ where: { id: req.params.id}})
    .then(row => res.json(row))
    .catch(err => res.status(500).json(err));
});

route.post('/torte',(req,res) =>{
    Torte.create({ naziv: req.body.naziv})
    .then(row => res.json(row))
    .catch( err => res.status(500).json(err));

});

route.put('/torte/:id',(req,res) =>{
    Torte.findOne({ where: {id: req.params.id}})
    .then(usr => {
        usr.naziv = req.body.naziv;

        usr.save()
        .then(row => res.json(row))
        .catch(err => res.status(500).json(err));
    })
});

route.delete('/torte/:id', (req,res) => {
    Torte.findOne({where: {id:req.params.id}})
    .then(usr => {
        usr.destroy()
            .then(row => res.json(row))
            .catch( err => res.status(500).json(err));
    })
    .catch( err => res.status(500).json(err));
});

module.exports = route;