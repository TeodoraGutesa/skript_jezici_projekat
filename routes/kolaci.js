const {sequelize,Kolaci, Torte,Users,Index,Mafini} = require('../models');
const express = require('express');
const {kolaciSchema} = require('../validation');


const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended:true}));

route.get('/kolaci',(req,res)=>{
    Kolaci.findAll()
    .then(row => res.json(row))
    .catch(err => res.status(500).json(err));
});

route.get('/kolaci/:id',(req,res)=>{
    Kolaci.findOne({ where: { id: req.params.id}})
    .then(row => res.json(row))
    .catch(err => res.status(500).json(err));
});

route.post('/kolaci',(req,res) =>{
   // Kolaci.create({ naziv: req.body.naziv,cena: req.body.cena})
    //.then(row => res.json(row))
    //.catch( err => res.status(500).json(err));


    kolaciSchema.validateAsync(req.body).then(obj => {
        obj = req.body;
            Kolaci.create(obj).then(row =>{
                res.json(row);
            }).catch(err => res.status(500).json(err));
    
        }).catch(err => res.status(600).json(err));


});

route.put('/kolaci/:id',(req,res) =>{
   /*
    Kolaci.findOne({ where: {id: req.params.id}})
    .then(usr => {
        usr.naziv = req.body.naziv;
        usr.cena = req.body.cena;

        usr.save()
        .then(row => res.json(row))
        .catch(err => res.status(500).json(err));
    })
    */
        kolaciSchema.validateAsync(req.body).then(obj => {
            Kolaci.findOne({ where: { id: req.params.id }}).then(kolac =>{
                kolac.naziv = req.body.naziv;
                kolac.cena = req.body.cena;
                kolac.save();
                res.json(kolac);
            }).catch(err => {
                res.status(500).json(err);
            });
        }).catch(err => {
            res.status(600).json(err);
           
        });
});

route.delete('/kolaci/:id', (req,res) => {
    Kolaci.findOne({where: {id:req.params.id}})
    .then(usr => {
        usr.destroy()
            .then(row => res.json(row))
            .catch( err => res.status(500).json(err));
    })
    .catch( err => res.status(500).json(err));
});
module.exports = route;