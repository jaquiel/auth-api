const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { config } = require('../config/index')

exports.isPasswordsMatched = (pwd, pwdStored) => {
    return bcrypt.compareSync(pwd, pwdStored)
}

exports.encryptPassword = (pwd) => {
    return bcrypt.hashSync(pwd, config.Salt.Rounds) 
}

exports.generateToken = (data) => {
    return jwt.sign(  { data } , 
                        config.Salt.Key,  
                      { expiresIn: '1d' })
}

exports.verifyToken = (token) => {
    return jwt.verify(token, config.Salt.Key) 
}