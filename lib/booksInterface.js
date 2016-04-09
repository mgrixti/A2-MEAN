/**
 * Created by Hikari on 2016-04-08.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/assign2');

//var books = require("/models/books.js");
var booksSchema = new mongoose.Schema({
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

var books = mongoose.model('Book', booksSchema);

function retriveAll() {
    books.find({}, function (err, data) {
        console.log(data[0]);
    });
}


retriveData('id', 484, function (err, data)
{
    console.log(data);
});


function retriveData(idToUse, dataToFind, callback)
{
    var results;
    books.find({}, function (err, data) {
        switch (idToUse)
        {
            case "id":
                for (var x = 0; x < data.length; x++)
                {
                    if (data[x].id == dataToFind)
                    {
                        results = data[x];
                    }
                }
                break;
        }
        callback("no", results);
    });


}

