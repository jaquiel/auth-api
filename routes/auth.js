const routes = require('express').Router()

const authController = require('../controllers/AuthController')
const userController = require('../controllers/UserController')

//routes.get('/', authController.get)
routes.post('/signup', userController.post)
routes.post('/signin', authController.signin)
routes.post('/signout', authController.signout)
routes.post('/changePassword', authController.changePassword)

module.exports = routes