var mongoose = require('mongoose');
var express = require('express');
var app = express();

var port = 80;
var router = express.Router();


// ----------- API ROUTES -------------
// Route for API about/how to use page
router.get('/', function(req, res){
    res.sendfile('views/api.html');
});

// all paths on router will have /api/ added to their route
app.use('/api', router);


// --------- APPLICATION ROUTES ---------
// Route for SPA
app.get('/', function(req, res){
    res.send('<h1>Angular app goes here</h1>');
});

console.log('API running on port: ' + port);
app.listen(port);