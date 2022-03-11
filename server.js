/**
 * Server initialization
 */
const { config } = require('./config/index')
const app = require('./app')

app.listen( config.APP.PORT, () => {
    console.log(`Server running on ${config.APP.HOST}:${config.APP.PORT}`)
})

