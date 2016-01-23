var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router(); //create to use express middleware.
var port = process.env.PORT || 3000;

//log requests with express middleware.
router.use(function(req, res, next){
    console.log('\nIncoming request... %s %s', req.method, req.path);
    next();
});

//default api endpoint
router.get('/', function(req, res) {
    res.send('Api Index');
});

app.use('/api', router); //set prefix for all endpoints.
require('./route')(app); //use other routes from route folder.

//start server and listen to requests.
var server = app.listen(port, function(req, res){
    console.log('\nStarted listening in port %s', port);
})