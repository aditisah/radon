const checkFreeAppUser = function(req,res,next){
    isFreeAppUserExist = req.headers.hasOwnProperty('isfreeappuser');
if(isFreeAppUserExist== true){
    next();
}
else{
    res.send("The request is missing a mandatory header")
}
}





module.exports.checkFreeAppUser = checkFreeAppUser;