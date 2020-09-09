const User = require('../models/User')
const { isPasswordsMatched, generateToken } = require('../middlewares/auth')
const { CreateSession } = require('../middlewares/session')

exports.get = (req, res, next) => {
    res.send("GET 200 OK Auth")
}

// exports.signup = (req, res, next) => {
//     userController.post(req, res, next)
// }

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

                   CreateSession(email)

                }
                else {
                        res.status(401).send({
                            message : "Password does not matched"
                        })
                    }

            } else {                
                res.status(404).send({
                    message: "User not found"
                })
            }
        })  
        .catch( error => {
                res.status(400).send({
                    message: "Error",
                    error: error
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
