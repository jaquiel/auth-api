const express = require('express');

const routes = express.Router();


//GET

const hello = {"message" : "Hello Everyone!"}; 
routes.get('/', (req, res) => {
    res.send(hello);
});;

const users = {"users" : [{"id" : "0", "username" : "root"}, {"id" : "1", "username" : "administrator"}]};
routes.get('/users', (req, res) => {
    res.send(users);
})


//POST

//PUT

//DELETE

module.exports = routes;