const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");


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

module.exports.getBooksByAuthorId= getBooksByAuthorId;
module.exports.getListOfAuthors= getListOfAuthors;
