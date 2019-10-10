const express = require('express');
const routes = require('./routes');

const app = express();


app.use(routes);

app.listen(147, (req, res) => { 
    console.log("Starting on port: 147");
});