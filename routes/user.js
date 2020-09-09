const routes = require('express').Router()

const userController = require('../controllers/userController')

routes.get('/', userController.get)
routes.get('/:userId', userController.getByUserId)
routes.post('/', userController.post)
routes.put('/:userId', userController.put)
//routes.delete('/', userController.delete)

module.exports = routes