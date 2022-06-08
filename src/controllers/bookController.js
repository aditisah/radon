const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");

const createBook= async function (req, res) {
    let newBookData= req.body;
    let createdBookData= await bookModel.create(newBookData);
    res.send({msg: createdBookData});
}
const getBookByAuthor = async function(req,res){
    let getAuthorData = await authorModel
                            .findOne({author_name: "Chetan Bhagat"});
    console.log(getAuthorData);
    let getBook = await bookModel
                        .find({author_id: getAuthorData.author_id});
    console.log(getBook)
    res.send({msg: getBook});
}
const findAuthorByBook = async function(req,res){
    let updatedBookData = await bookModel.findOneAndUpdate(
        {bookName: "Two states"},
        {$set: {price: 100}},
        {new: true}
    );
    let bookPrice = updatedBookData.price;
    let result = await authorModel.findOne(
                        {author_id: updatedBookData.author_id}).select({author_name:1,_id:0})
    res.send({msg: result,bookPrice});
}
const getAuthorWithBooks = async function(req,res){
    let resultArr=[];
    let getBook = await bookModel.find({price: {$gte:50,$lte:100}}).select({author_id:1});
    console.log(getBook);
     for(let i=0;i<getBook.length;i++){
       let result = await authorModel.find({author_id:getBook[i].author_id}).select({author_name:1,_id:0});
        console.log(result);
      resultArr.push(result);  
     }
         res.send(resultArr)
         

    
}
const getBooksByAuthorId = async function(req,res){
    const authorId = req.params.author_id;
    const book = await bookModel.find({author_id:authorId}).select({bookName:1,_id:0});
    res.send(book);
}

const getListOfAuthors = async function(req,res){
    let authorArr = [];
    const book = await bookModel.find({ratings:{$gt:4}}).select({author_id:1,_id:0});
    let uniqueAuthorId = book.map(x=>x.author_id).filter((el,index,arr)=>arr.indexOf(el)==index);
    //console.log(uniqueAuthorId)
    for(let i=0;i<uniqueAuthorId.length;i++){
        let author = await authorModel.findOne({$and: [{author_id:uniqueAuthorId[i]},{age:{$gt:50}}]}).select({author_name:1,age:1,_id:0});
        if(author){
            authorArr.push(author);
        }
    }
        res.send(authorArr);
}

module.exports.getBookByAuthor = getBookByAuthor;
module.exports.createBook= createBook;
module.exports.findAuthorByBook= findAuthorByBook;
module.exports.getAuthorWithBooks= getAuthorWithBooks;
module.exports.getBooksByAuthorId= getBooksByAuthorId;
module.exports.getListOfAuthors= getListOfAuthors;
