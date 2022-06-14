const jwt = require("jsonwebtoken");
let userModel = require("../models/userModel")
let auth = async function(req,res,next){
    let token = req.headers["x-Auth-token"];
if(!token){
  token = req.headers["x-auth-token"]
}
  if(!token){
    return res.send("token is manadatory");
  }
  let decodedToken = jwt.verify(token,"functionup-radon");
  if(!decodedToken){
    return res.send("Token is invalid")
  } 
  let userId = req.params.userId;
  //let userData = req.body;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
  next();
}

module.exports.auth = auth;