const express = require('express');
const app = express();

const { sequelize } = require('./models');

const apiRoutes = require('./routes/torte');
const apiRoutes1 = require('./routes/kolaci');
const apiRoutes2 = require('./routes/users');
const apiRoutesMafini = require('./routes/mafini');

const path = require('path');

const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use ('/admin',apiRoutes);
app.use('/admin',apiRoutes1);
app.use('/admin',apiRoutes2);
app.use('/api',apiRoutesMafini);


function getCookies(req) {
    if (req.headers.cookie == null) return {};

    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });

    return parsedCookies;
};

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];
  
    if (token == null) return res.redirect(301, '/login');
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
        if (err) return res.redirect(301, '/login');
    
        req.user = user;
    
        next();
    });
}


app.get('/register', (req, res) => {
    res.sendFile('register.html', { root: './static' });
});


app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: './static' });
});

app.get('/moderator',(req,res) =>{
    res.sendFile('moderatorIndex.html', {root: './static'});
})

/*
app.get('/api', (req, res) => {
    res.sendFile('index.html', { root: './static' });
});
*/


app.get('/', authToken, (req, res) => {
    res.sendFile('index.html', { root: './static' });
});

/*
app.get('/',  (req, res) => {
    res.sendFile('index.html', { root: './static' });
});
*/
app.use(express.static(path.join(__dirname,'static')));


app.listen({ port: 8000 }, async () => {
    await sequelize.authenticate();
    console.log("server started")
});

