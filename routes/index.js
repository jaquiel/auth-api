const router = require('express').Router();

router.get('/', function(req, res) {
    res.send({
        title : "Authenticate Service",
        version : "0.0.1"    
    });
});

router.get('/about', function(req, res) {
    res.send('About Page');
});

module.exports = router;