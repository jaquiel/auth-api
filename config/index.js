require('dotenv').config({ path: './config/.env' })

exports.config = {

    "APP": {
        "HOST" : process.env.APP_HOST,
        "PORT" : process.env.APP_PORT
    },
    "DB": {
        "ConnectionString": process.env.DB_CONNECTIONSTRING,    
    },
    "Salt": {
        "Key": process.env.SALT_SECRETKEY, // "0a632dd5db81ece3ba9eaf3a52886027" = "just4testing"
        "Rounds": process.env.SALT_ROUNDS, // 8,
    }
}
