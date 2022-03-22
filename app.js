/**
 * App initialization
 */
const express = require('express')
const indexRoute = require('./routes/index')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

const app = express()

/**
 * Database Connection
 */
const InitiateMongoServer = require('./config/db')

InitiateMongoServer();

/**
 * app.use
 */
app.use(express.json())

/** */
app.set('json spaces', 4)

/**
 * 
 */
const cors = require('cors')
app.use(
    cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    }))

/**
 * Routes
 */
app.use('/', indexRoute)

/**
 * Router Middleware
 * Router - /users/*
 * Method - *
 */
app.use('/users', userRoute)

app.use('/auth', authRoute)

module.exports = app 