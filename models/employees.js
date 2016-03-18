var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
    description: String,
    date: Date,
    priority: String,
    status: String,
    id: Number
});

var EmployeeSchema = new Schema({
    id: Number,
    guid: String,
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    salt: String,
    todo: [ToDoSchema]
});

module.exports = mongoose.model('Employee', EmployeeSchema);