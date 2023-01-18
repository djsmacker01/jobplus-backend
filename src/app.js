const express = require('express');
const app = express(); 
const cors = require('cors');


//middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express({type:'application/vnd.api+json'})); 

//routes
const userRoutes = require('./routes/user.routes')
app.use('/api/',userRoutes)

module.exports = app

