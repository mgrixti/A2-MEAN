var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    id: String,
    isbn10: String,
    isbn13: String,
    title: String,
    year: Number,
    publisher: String,
    production:
    {
        status: String,
        binding: String,
        size: String,
        pages: Number,
        instock: Date
    },
    category:
    {
        main: String,
        secondary: String
    }
});

module.exports = mongoose.model('Book', BookSchema);