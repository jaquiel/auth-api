const User = require('../models/user')
const authMiddleware = require('../middlewares/auth')

exports.get = (req, res, next) => {

    User
        .find()
        .then( data => {
            res.status(200).send({
                message: "List of all users", 
                data: data
            })
        })
        .catch( error => {
            res.status(400).send({
                message: "Error finding users",
                error : error
            })
        })
        
}

exports.getActiveUsers = (req, res, next) => {

    User
        .find({ active : true })
        .then( data => {
            res.status(200).send({
                message: "List of all active users", 
                data : data})
        })
        .catch( error => {
            res.status(400).send({
                message: "Error finding users",
                error : error
            })
        })
}

exports.getByUserId = (req, res, next) => {

    const email = req.params.userId
    
    User
        .findOne({ email : email })
        .then( data => {
            if (data != null) {
                res.status(200).send({
                    message: "User found",
                    data : data
                })
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

exports.post = (req, res, next) => {
        
    console.log(req);
    const user = new User()
    const { firstname, lastname, email, password } = req.body

    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.password = password
    user.password = authMiddleware.encryptPassword(password)

    user
        .save()
        .then( data => {
            res.status(201).send({
                message : "User added sucessfully",
                data : data
            })
        })
        .catch( error => { 
            const { code } = error

            switch (code){

                case 11000:
                    res.status(409).send({
                        message : "User already registered.",
                        //data : error.KeyValue.email,
                    })                 
                    break;
                default:            
                    res.status(400).send({
                        message : `Error: ${error}`,
                        data : error
                    })
            } 
        })
}

exports.put = (req, res, next) => {

   const userId = req.params.userId
   const { firstname, lastname, active } = req.body
   
   console.log(userId)

   User.findOneAndUpdate( { email : userId },
                            {
                                $set: {
                                    active : active
                                } 
                            }, { new : true })
        .then( data => {
            res.status(200).send({
                message : "User updated sucessfully",
                data : data,
            })
        })
        .catch( error => { 
            res.status(400).send({
                message : "Error: ",
                data : error
            })
        })

}

exports.patch = (req, res, next) => {
    res.status(501).send({
        message : "Not Implemented.",
    })    
}