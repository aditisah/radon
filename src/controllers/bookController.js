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
// const getBooksList= async function (req, res) {
//     let allBooksDetail = await bookModel.find().select({bookName:1,authorName:1,_id:0});
//     res.send(allBooksDetail);
// }
//  const getBooksInYear= async function (req, res) {
//      let allBooksData = req.body;
//      let getBooksByYear = await bookModel.find({year:allBooksData.year});
//      res.send({msg: getBooksByYear});
//  }
//   const getParticularBooks= async function (req, res) {
//     let userData = req.body;
//       let selectedBooks = await bookModel.find(userData);
//       res.send(selectedBooks);
//   }
// const getXINRBooks= async function (req, res) {
//     let getBooksByINR = await bookModel.find({"prices.indianPrice" : {$in: ["100INR","200INR","500INR"]}});
//     res.send(getBooksByINR);
//  }
// const getRandomBooks= async function (req, res) {
//     let selectBooks = await bookModel.find({$or: [{stockAvailable: true},{totalPages: {$gt:500}}]});
//     res.send(selectBooks);
// }

module.exports.getBookByAuthor = getBookByAuthor;
module.exports.createBook= createBook;
module.exports.findAuthorByBook= findAuthorByBook;
module.exports.getAuthorWithBooks= getAuthorWithBooks;
// module.exports.getBooksList= getBooksList
// module.exports.getBooksInYear= getBooksInYear
// module.exports.getParticularBooks= getParticularBooks
// module.exports.getXINRBooks= getXINRBooks
// module.exports.getRandomBooks= getRandomBooks