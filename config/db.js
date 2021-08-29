const mongoose = require('mongoose')

const { config } = require('./index')

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

const mongoUri = config.DB.ConnectionString

const InitiateMongoServer = async () => {
    try {

        await mongoose.connect(
            mongoUri, {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        console.log('DB connected!')

    } catch(e) {
        console.log(e)
        throw e

    }
}

module.exports = InitiateMongoServer