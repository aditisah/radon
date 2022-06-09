const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

const createBook= async function (req, res) {
    let book = req.body
    let authorId = await authorModel.find().select({_id:1});
    let validAuthorIdStringArr = authorId.map(el=>el._id.toString());
    let publisherId = await publisherModel.find().select({_id:1});
    let validPublisherIdStringArr = publisherId.map(el=>el._id.toString());
    if(!book.author){
        return res.send("author id is required!");
        }
    if(!validAuthorIdStringArr.includes(book.author)){
        return res.send("invalid author id")
    }
    if(!book.publisher){
    return res.send("publisher id is required!");
                  }
    if(!validPublisherIdStringArr.includes(book.publisher)){
        return res.send("invalid publisher id")
    }
        let bookCreated = await bookModel.create(book)
            return res.send({data: bookCreated})
    }
   
 

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author publisher');
    res.send({data: books})
}

 const updateIsHardCover = async function(req,res){
let publisherId = await publisherModel.find({$or:[{name:'Penguin'},{name:'HarperCollins'}]}).select({_id:1});
console.log(publisherId)
let publisherIdStringArr = publisherId.map(el=>el._id.toString());
let authorId = await authorModel.find({rating: {$gt:3.5}}).select({_id:1});
let authorIdStringArr = authorId.map(el=>el._id.toString());
//console.log(publisherIdStringArr)
let updateHardCoverDetail = await bookModel.updateMany(
          {publisher:publisherIdStringArr},
          {$set: {isHardCover:true}},
          {new: true}
       )
    
      let updateAge = await bookModel.updateMany(
        {author:authorIdStringArr},
        {$inc:{price: 10}},
        {new:true}
    )
    res.send({updateHardCoverDetail,updateAge})
 }
 

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateIsHardCover= updateIsHardCover

