const jwt = require("jsonwebtoken");
    let userModel = require("../models/userModel")
    
const authenticate = async function(req, res, next) {
  try{
    let token = req.headers["x-Auth-token"];
    if(!token){
      token = req.headers["x-auth-token"]
    }
      if(!token){
        return res.status(401).send("token is manadatory");
      }
      let decodedToken = jwt.verify(token,"functionup-radon");
      if(!decodedToken){
        return res.status(403).send("Token is invalid")
      } 
      let userId = req.params.userId;
      //let userData = req.body;
      let user = await userModel.findById(userId);
      //Return an error if no user with the given id exists in the db
      if (!user) {
        return res.status(400).send("No such user exists");
      }
      next();
    }
    catch(err){
      res.status(500).send({msg: err.message})
    }
    }
    
const authorise =  function(req, res, next) {
  try{
    let token = req.headers["x-Auth-token"];
    if(!token){
        token = req.headers["x-auth-token"]
      }
    let decodedToken = jwt.verify(token,"functionup-radon");
        let userToBeModified = req.params.userId;
        if(decodedToken.userId !== userToBeModified){
            return res.status(403).send({status: false,msg:'you are not allowed to modify or delete other\'s data'})
        }
    next()
  }
    catch(err){
      res.status(500).send({msg: err.message})
    }
}

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;