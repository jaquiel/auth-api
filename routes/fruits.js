const routes = require('express').Router()

const FruitController = require('../controllers/FruitController')

routes.get('/', FruitController.index)
routes.post('/', FruitController.create)
routes.get('/:index', FruitController.show)
routes.put('/:index', FruitController.update)
routes.delete('/:index', FruitController.destroy)

module.exports = routes