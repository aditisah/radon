const res = require('express/lib/response');
const bookModel =require('../models/bookModel');

const createNewBook = async function(req,res){
 let newBook = req.body;
 let savedNewBook = await bookModel.create(newBook);
 res.send(savedNewBook);
}

const getAllBooks = async function(req,res){
let listOfBooks = await bookModel.find();
res.send({msg : listOfBooks});
}


module.exports.createNewBook = createNewBook;
module.exports.getAllBooks = getAllBooks;