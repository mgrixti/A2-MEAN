var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
    description: String,
    date: String,
    priority: String,
    status: String,
    id: Number
});

var UniversitySchema = new Schema({
    id: Number,
    name: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    website: String,
    latitude: String,
    longitude: String
});

var ContactSchema = new Schema({
    firstname: String,
    lastname:String,
    university: [UniversitySchema]
});

var MessagesSchema = new Schema({
    id: Number,
    contact: [ContactSchema],
    date: String,
    category: String,
    content: String
});

var EmployeeSchema = new Schema({
    id: Number,
    guid: String,
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    salt: String,
    todo: [ToDoSchema],
    messages: [MessagesSchema]
});

module.exports = mongoose.model('Employee', EmployeeSchema);