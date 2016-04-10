var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 80;
var router = express.Router();
var employee = require('./models/employees.js');

app.use( bodyParser.urlencoded({
    extended:true
}));

// app.use(express.urlencoded());

mongoose.connect('mongodb://localhost/assign2');

// ----------- API ROUTES -------------
// Route for API about/how to use page
app.get('/api/', function(req, res){
    res.redirect('http://www.github.com/abcd134/A2-MEAN/wiki/API');
});

router.route('/employees')
    .get( function(req, res) {
        // employee.find({}, function (err, data){
        //     res.json(data)
        employee.findOne({username: req.query.username, password: req.query.password}, function (err, data){
            res.json(data);
        });
    })
    //post request for user login.
    .post(function(req,res){


        employee.findOne({username: req.body.username, password: req.body.password}, function (err, data){
            if(data != undefined){
                res.json(0); // Correct login
            }
            else
                res.json(1); // username/password does not valid
        })
    });

// Get 'to-do' by the  employee's ID
router.route('/todo/:employeeID')
    .get(function(req, res) { // Get all 'todo's for a single employee
        employee.findOne({id: req.params.employeeID}, 'todo', function (err, data){
            res.json(data);
    });
});

router.route('/todo/:employeeID/:todoID')
    // Get specific to-do item for an employee
    // Right now it filters the to-do programatically, but I would have liked to do it at DB level
    .get(function(req,res) {
        employee.findOne({id: req.params.employeeID}, function(error, data){
            for(var i = 0; i < data.todo.length; i++){
                if(data.todo[i].id == req.params.todoID){
                    res.json(data.todo[i]);
                }
            }
        });
    })
    .put(function(req,res){
        employee.update({id: req.params.employeeID,'todo.id': req.params.todoID},
            {'todo.$.status': req.body.status,
             'todo.$.priority': req.body.priority,
             'todo.$.date': req.body.date,
             'todo.$.description': req.body.description},
            function (err, data){

            res.json(data);

        });
    })
    // Delete specific to-do item for an employee
    .delete(function(req,res){
        employee.update({id: req.params.employeeID},
            {$pull: {todo: {id: req.params.todoID}}},
            function(err, result){
                res.json(result);
        });
    });


// MESSAGES Routes
router.route('/messages/:employeeID')
    .get(function(req, res) { // Get all 'todo's for a single employee
        employee.findOne({id: req.params.employeeID}, 'messages', function (err, data){
            res.json(data);
        });
    });

router.route('/messages/:employeeID/:messageID')
    // Get specific message item for an employee
    // Right now it filters the messages programatically, but I would have liked to do it at DB level
    .get(function(req,res) {
        employee.findOne({id: req.params.employeeID}, function(error, data){
            var messages;
            for(var i = 0; i < data.messages.length; i++){
                if(data.messages[i].id == req.params.messageID){
                    res.json(data.messages[i]);
                }
            }
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