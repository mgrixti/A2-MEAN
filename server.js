var mongoose = require('mongoose');
var express = require('express');
var app = express();

var port = 80;
var router = express.Router();
var employee = require('./models/employees.js');

mongoose.connect('mongodb://localhost/assign2');

// ----------- API ROUTES -------------
// Route for API about/how to use page
router.get('/', function(req, res){
    res.sendfile('views/api.html');
});

router.route('/employees')
    .get( function(req, res) {
        employee.find({}, function (err, data){
            res.json(data)
        });
    });

// Get 'to-do' by the  employee's ID
router.route('/todo/:employeeID')
    .get(function(req, res) { // Get all 'todo's for a single employee
        employee.find({id: req.params.employeeID}, 'todo', function (err, data){
            res.json(data)
    });
});


router.route('/todo/:employeeID/:todoID')
    // Delete specif to-do item for an employee
    .delete(function(req,res){
        employee.update({id: req.params.employeeID},
            {$pull: {todo: {id: req.params.todoID}}},
            function(err, result){
                res.send(result);
        });
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