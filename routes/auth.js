const routes = require('express').Router()

const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

//routes.get('/', authController.get)
routes.post('/signup', userController.post)
routes.post('/signin', authController.signin)
routes.post('/signout', authController.signout)
routes.put('/changePassword', authController.changePassword)

module.exports = routes