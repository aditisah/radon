const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
    let data = req.body;
    if(Object.keys(data)!==0){
      let savedData = await userModel.create(data);
     return res.status(201).send({ msg: savedData });
    }
        res.status(400).send({msg:'BAD REQUEST'});
    
  }
  catch(err){
    res.status(500).send({msg:"Error",error:err.message})
  }
};
    

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
try{
        let user = await userModel.findOne({ emailId: userName, password: password });
        let token = jwt.sign(
            {
              userId: user._id.toString(),
              batch: "radon",
              organisation: "FunctionUp",
            },
            "functionup-radon"
          );
          //res.setHeader("x-auth-token", token);
          res.status(200).send({ status: true, token: token });
    }
    
  catch(err){
    return res.status(400).send({
      status: false,
      msg: "username or the password is not correct",
      error: err.message
    });
  }
  
  
};

const getUserData = async function (req, res) {
try{
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    res.status(200).send({ status: true, data: userDetails });
}
  catch(err){
res.status(500).send({msg:'Something went wrong'})
  }
};
const updateUser = async function (req, res) {
    try{
        let userId = req.params.userId;
        let userData = req.body;
          let updatedUser = await userModel.findByIdAndUpdate({_id: userId},userData,{new: true})
          return res.status(200).send({updatedUser})
    }
catch(err){
    res.status(500).send({msg: err.message});
}
};


const deleteUser = async function(req,res){
    try{
        let userId = req.params.userId;
        let deleteUser = await userModel.findOneAndUpdate({_id: userId},{$set:{isDeleted: true}},{new: true})
        res.status(200).send({deleteUser})
    }
    catch(err){
        res.status(500).send({msg:err.message})
    }
};
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;

