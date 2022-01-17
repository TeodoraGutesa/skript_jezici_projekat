const {sequelize,Mafini, Torte,Users,Index,Kolaci} = require('../models');
const express = require('express');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended:true}));

route.get('/mafini',(req,res)=>{
    Mafini.findAll()
    .then(row => res.json(row))
    .catch(err => res.status(500).json(err));
});

route.get('/mafini/:id',(req,res)=>{
    Mafini.findOne({ where: { id: req.params.id}})
    .then(row => res.json(row))
    .catch(err => res.status(500).json(err));
});

route.post('/mafini',(req,res) =>{
    Mafini.create({ naziv: req.body.naziv,cena: req.body.cena})
    .then(row => res.json(row))
    .catch( err => res.status(500).json(err));

});

route.put('/mafini/:id',(req,res) =>{
    Mafini.findOne({ where: {id: req.params.id}})
    .then(usr => {
        usr.naziv = req.body.naziv;
        usr.cena = req.body.cena;

        usr.save()
        .then(row => res.json(row))
        .catch(err => res.status(500).json(err));
    })
});

route.delete('/mafini/:id', (req,res) => {
    Mafini.findOne({where: {id:req.params.id}})
    .then(usr => {
        usr.destroy()
            .then(row => res.json(row))
            .catch( err => res.status(500).json(err));
    })
    .catch( err => res.status(500).json(err));
});

module.exports = route;