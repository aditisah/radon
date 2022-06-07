const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        required: true,
        unique: true
    } ,
    author_id: Number,
    price: Number,
    ratings: Number
}, { timestamps: true });


module.exports = mongoose.model('bookDetail', bookSchema) //users

