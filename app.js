/**
 * App initialization
 */
const express = require('express')
const indexRoute = require('./routes/index')
const userRoute = require('./routes/user')
const sessionRoute = require('./routes/session')
const authRoute = require('./routes/auth')
const cors = require('cors')

const app = express()

app.use(cors({
    origins: ["*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}))


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
 * Routes
 */
app.use('/', indexRoute)

/**
 * Router Middleware
 * Router - /users/*
 * Method - *
 */
app.use('/users', userRoute)

app.use('/sessions', sessionRoute)

app.use('/auth', authRoute)

module.exports = app