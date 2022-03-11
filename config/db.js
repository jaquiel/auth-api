const mongoose = require('mongoose')

const { config } = require('./index')

const mongoUri = config.DB.ConnectionString

const InitiateMongoServer = async () => {
    try {

        await mongoose.connect(
            mongoUri, {})
        console.log('DB connected!')

    } catch(e) {
        console.log(e)
        throw e

    }
}

module.exports = InitiateMongoServer