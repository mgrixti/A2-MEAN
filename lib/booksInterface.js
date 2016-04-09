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
            case "isbn10":
                for (var x = 0; x < data.length; x++)
                {
                    if (data[x].isbn10 == dataToFind)
                    {
                        results = data[x];
                    }
                }
                break;
            case "isbn13":
                for (var x = 0; x < data.length; x++)
                {
                    if (data[x].isbn13 == dataToFind)
                    {
                        results = data[x];
                    }
                }
                break;
            case "title":
                for (var x = 0; x < data.length; x++)
                {
                    console.log(data[x].title + " = " + dataToFind);
                    if (data[x].title.search(dataToFind))
                    {
                        results = data[x];
                    }
                }
                break;
        }
        callback("no", results);
    });
}

//** TEST DATA

//Works
// retriveData('id', 484, function (err, data)
// {
//     console.log(data);
// });

// retriveData('isbn10', "0133074676" , function (err, data)
// {
//     console.log(data);
// });

// retriveData('isbn13', "9780133074673" , function (err, data)
// {
//     console.log(data);
// });

retriveData('title', "Market" , function (err, data)
{
    console.log(data);
});


