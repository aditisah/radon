
const bookModel = require("../models/bookModel");

const createBook= async function (req, res) {
    let newBookData= req.body;
    let createdBookData= await bookModel.create(newBookData);
    res.send({msg: createdBookData});
}

const getBooksList= async function (req, res) {
    let allBooksDetail = await bookModel.find().select({bookName:1,authorName:1,_id:0});
    res.send(allBooksDetail);
}
 const getBooksInYear= async function (req, res) {
     let allBooksData = req.body;
     let getBooksByYear = await bookModel.find({year:allBooksData.year});
     res.send({msg: getBooksByYear});
 }
  const getParticularBooks= async function (req, res) {
       let bookName = req.body.bookName;
          let europeanPrice = req.body.prices.europeanPrice;
      let selectedBooks = await bookModel.find({$and: [{bookName:bookName},{"prices.europeanPrice":{$gt:europeanPrice}}]});
      res.send(selectedBooks);
  }
const getXINRBooks= async function (req, res) {
    let getBooksByINR = await bookModel.find({"prices.indianPrice" : {$in: ["100INR","200INR","500INR"]}});
    res.send(getBooksByINR);
 }
const getRandomBooks= async function (req, res) {
    let selectBooks = await bookModel.find({$or: [{stockAvailable: true},{totalPages: {$gt:500}}]});
    res.send(selectBooks);
}


module.exports.createBook= createBook
module.exports.getBooksList= getBooksList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks