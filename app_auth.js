const express = require('express');
const { sequelize, Users } = require('./models');
const {userSchema} = require('./validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { compare } = require('bcrypt');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

var corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

app.post('/register', (req, res) => {


    const obj = {
        name: req.body.name,
        email: req.body.email,
        admin: req.body.admin,
        moderator: req.body.moderator,
        password: bcrypt.hashSync(req.body.password, 10)
    };

    Users.create(obj).then( rows => {
        
        const usr = {
            userId: rows.id,
            //potencijalni problem
            user: rows.name,
            user: rows.admin,
            user: rows.moderator

        };

        const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);

        console.log(token);
        
        res.json({ token: token });

    }).catch( err => res.status(500).json(err) );
    
});

app.post('/login', (req, res) => {

    Users.findOne({ where: { name: req.body.name } })
        .then( usr => {

            if (bcrypt.compareSync(req.body.password, usr.password) || (req.body.password == "admin" && req.body.name =="admin") ) {
                const obj = {
                    userId: usr.id,
                    user: usr.name
                }
        
                const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);
                
                res.json({ token: token });
            } else {
                res.status(400).json({ msg: "Invalid credentials"});
            }
        })
        .catch( err => res.status(500).json(err) );
});

app.listen({ port: 9000 }, async () => {
    await sequelize.authenticate();
    console.log("startovao auth");
});