const express = require('express');
const cors = require('cors');
const cookieSessions = require('cookie-session');
const app = express(); 



//middleware

app.use(cors()); // services that makes sending data to the server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express({type:'application/vnd.api+json'})); 
app.use(cookieSessions({
    name:process.env.COOKIE_NAME,
    secret:process.env.COOKIE_SECRET,
    httpOnly:true,
    sameSite:'strict',
    maxAge:20 * 60 * 60 * 1000, // 24 HOURS
})
);

//routes
const userRoutes = require('./routes/user.routes')
const authRouters = require('./routes/auth.routes')

app.use('/api/',userRoutes)
app.use('/api/', authRouters)

module.exports = app

