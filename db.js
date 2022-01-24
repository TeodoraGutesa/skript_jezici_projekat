const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { sequelize } = require('./models');

const apiRoutes = require('./routes/torte');
const apiRoutes1 = require('./routes/kolaci');
const apiRoutes2 = require('./routes/users');
const apiRoutesMafini = require('./routes/mafini');

const path = require('path');

var corsOptions = {
    origin: '*',
    credentials:true,
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));


app.use ('/admin',apiRoutes);
app.use('/admin',apiRoutes1);
app.use('/admin',apiRoutes2);
app.use('/api',apiRoutesMafini);


app.use(express.static(path.join(__dirname,'static')));

app.listen({ port:7000}, async () => {
    await sequelize.authenticate();
    console.log("startovan db");
})

