const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    bookName : {
        type: String,
        required: true
    },
    authorName: String,
    catagory: String,
    year: String
}, { timestamp: true});


module.exports = mongoose.model('Book',bookSchema);