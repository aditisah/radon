const jwt = require("jsonwebtoken");
    let userModel = require("../models/userModel")
    
const authenticate = async function(req, res, next) {
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
    
const authorise =  function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if(!token){
        token = req.headers["x-auth-token"]
      }
    let decodedToken = jwt.verify(token,"functionup-radon");
        let userToBeModified = req.params.userId;
        if(decodedToken.userId !== userToBeModified){
            return res.send({status: false,msg:'you are not allowed to modify or delete other\'s data'})
        }
    next()
}

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;