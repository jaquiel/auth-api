const User = require('../models/User')
const { isPasswordsMatched, generateToken, encryptPassword } = require('../middlewares/auth')
//const { CreateSession } = require('../middlewares/session')

exports.signup = (req, res, next) => {
    userController.post(req, res, next)
}

/**
 * 
 * 
 */
exports.signin = (req, res, next) => {
    
    const { email, password } = req.body

    User
        .findOne({ email : email })
        .then( data => {
            if (data != null) {

               if (isPasswordsMatched(password, data.password)){

                    const token = generateToken(data)
                    res.status(200).send({
                        message: "User Authenticated",
                        auth: true,
                        token: token
                    }) 

                   //CreateSession(email)

                }
                else {
                        res.status(401).send({
                            message : "Password does not matched",
                            auth: false,
                        })
                    }

            } else {                
                res.status(400).send({
                    message: "User not found"
                })
            }
        })  
        .catch( error => {
                res.status(400).send({
                    message: "Error",
                    error: error.data
                })
            })
}

exports.signout = (req, res, next) => {
    res.status(200).send({
        message: "User Unauthenticated",
        auth: false,
        token: null
    }) 
}

exports.changePassword = (req, res, next) => {
    
    const { email, password, newPassword } = req.body
    const newPass = encryptPassword(newPassword)

    User
        .findOneAndUpdate({ email : email },
                          {$set:{ password: newPass } })
        .then( data => {
            if (data != null) { 
                res.status(200).send({
                    message: "Password changed",
                    data: {
                        email:email,
                        password:password,
                        newPassword:newPassword,
                        dt: data
                    }
                })                
            }
        })
        .catch( error => {
                res.status(400).send({
                    message: "Error",
                    error: error.data
                })
            })   
}