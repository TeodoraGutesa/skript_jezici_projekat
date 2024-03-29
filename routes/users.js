const { sequelize, Users,Torte,Kolaci,Mafini} = require('../models');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const {userSchema} = require('../validation');


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

   // const administrator = req.user.admin;
   // const mod = req.user.moderator;
    //if(req.body.name == "admin"){
    Users.findAll()
    .then(row => res.json(row))
    .catch(err => res.status(500).json(err));
   // }
});

route.get('/users/:id',(req,res)=>{
    Users.findOne({ where: { id: req.params.id}})
    .then(row => res.json(row))
    .catch(err => res.status(500).json(err));
});

route.post('/users',(req,res) =>{
   /*
    Users.create({ name: req.body.name,email: req.body.email,password: req.body.password,moderator: req.body.moderator, admin:req.body.admin})
    .then(row => res.json(row))
    .catch( err => res.status(500).json(err));
*/
    userSchema.validateAsync(req.body).then(obj => {
        obj = req.body;
        obj.password = bcrypt.hashSync(req.body.password, 10);
            Users.create(obj).then(row =>{
                res.json(row);
            }).catch(err => res.status(500).json(err));
    
        }).catch(err => res.status(600).json(err));
});

route.put('/users/:id',(req,res) =>{
   /*
    Users.findOne({ where: {id: req.params.id}})
    .then(usr => {
        usr.name = req.body.name;
        usr.email = req.body.email;

        usr.save()
        .then(row => res.json(row))
        .catch(err => res.status(500).json(err));
    })
*/

userSchema.validateAsync(req.body).then(obj => {
    Users.findOne({ where: { id: req.params.id }})
    .then(usr =>{
        usr.name = req.body.name;
        usr.email = req.body.email;
        usr.password = bcrypt.hashSync(req.body.password, 10);
        usr.admin = req.body.admin;
        usr.moderator = req.body.moderator;
        usr.save();
        res.json(usr);
    }).catch(err => {
        res.status(500).json(err);
        console.log("error 500 tebrice");
    });
}).catch(err => {
    res.status(600).json(err);
    console.log("error 600 tebrice");
});

   


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


//route.use(authToken);
module.exports = route;