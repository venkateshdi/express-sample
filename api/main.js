var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router(); //create to use express middleware.
var port = process.env.PORT || 3000;

app.locals.title = 'One Api';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//log requests with express middleware.
router.use(function (req, res, next) {
    console.log('\nIncoming request... %s %s', req.method, req.originalUrl);
    next();
});

//default api endpoint
router.get('/', function (req, res) {
    res.send(app.locals.title);
});

app.use('/api', router); //set prefix for all endpoints.
require('./routes')(app); //use other routes from route folder.

//start server and listen to requests.
var server = app.listen(port, function (req, res) {
    console.log('\nStarted listening in port %s', port);
})