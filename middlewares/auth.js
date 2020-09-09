const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Salt } = require('../config/index')

exports.isPasswordsMatched = (pwd, pwdStored) => {
    return bcrypt.compareSync(pwd, pwdStored)
}

exports.encryptPassword = (pwd) => {
    return bcrypt.hashSync(pwd, Salt.Rounds) 
}

exports.generateToken = (data) => {
    console.log(Salt)
    console.log(Salt.Key)
    return jwt.sign(  { data } , 
                        Salt.Key,  
                      { expiresIn: '1d' })
}

exports.verifyToken = (token) => {
    return jwt.verify(token, Salt.Key) 
}