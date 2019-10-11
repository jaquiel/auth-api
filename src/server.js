const express = require('express');
const routes = require('./routes');
const app = express();
const port = 13579


app.use(routes);

app.listen(port, (req, res) => { 
    console.log(`Running...prta {port}`);
});