const publisherModel = require("../models/publisherModel");

const createPublisher = async function(req,res){
let author = req.body;
let authorCreated = await publisherModel.create(author);
res.send(authorCreated);
}


module.exports.createPublisher = createPublisher;