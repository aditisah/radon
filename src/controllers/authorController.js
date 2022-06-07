const authorModel = require("../models/authorModel");
const createAuthor = async function (req,res){
    let newEntry = req.body;
let newAuthorEntry = await authorModel.create(newEntry);
res.send({msg: newAuthorEntry});
}




module.exports.createAuthor = createAuthor;
