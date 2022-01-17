const { sequelize, Users,Torte,Kolaci,Mafini} = require('../models');
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended:true}));

function authToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.status(401).json({ msg: err });
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
        if (err) return res.status(403).json({ msg: err });
    
        req.user = user;
    
        next();
    });
}

route.get('/users', (req,res) => {
    Users.findAll()
    .then(row => res.json(row))
    .catch(err => res.status(500).json(err));
 
});

route.get('/users/:id',(req,res)=>{
    Users.findOne({ where: { id: req.params.id}})
    .then(row => res.json(row))
    .catch(err => res.status(500).json(err));
});

route.post('/users',(req,res) =>{
    Users.create({ name: req.body.name,email: req.body.email,password: req.body.password,moderator: req.body.moderator, admin:req.body.admin})
    .then(row => res.json(row))
    .catch( err => res.status(500).json(err));

});

route.put('/users/:id',(req,res) =>{
    Users.findOne({ where: {id: req.params.id}})
    .then(usr => {
        usr.name = req.body.name;
        usr.email = req.body.email;

        usr.save()
        .then(row => res.json(row))
        .catch(err => res.status(500).json(err));
    })
});

route.delete('/users/:id', (req,res) => {
    Users.findOne({where: {id:req.params.id}})
    .then(usr => {
        usr.destroy()
            .then(row => res.json(row))
            .catch( err => res.status(500).json(err));
    })
    .catch( err => res.status(500).json(err));
});


route.use(authToken);
module.exports = route;