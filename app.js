const express = require('express')
const index = require('./routes/index')
const fruits = require('./routes/fruits')

const app = express()

/**
 * app.use
 */
app.use(express.json())

/** */
app.set('json spaces', 4)

/**
 * Routes
 */
//app.use('/', require('./routes/index'))
//app.use('/fruits', require('./routes/fruits'))
app.use('/', index)
app.use('/fruits', fruits)

module.exports = app