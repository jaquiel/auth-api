const Session = require('../models/session')

exports.CreateSession = (email) => {

    const session = new Session()
    session.email = email
    session.ipAddress = '127.0.0.1'
    session.signedOutAt = null
    
    console.log(session)
    session
        .save()
        .then()
        .catch()               
}   

exports.CloseSession = (email) => {

    Session
        .findOne({ email : email })
        .then()
        .catch()
}