let axios = require('axios');

let postMeme = async function(req,res){
    try{
        let meme_id = req.query.template_id;
    let text0 = req.query.text0
    let text1 = req.query.text1
    let userName = req.query.username
    let passWord = req.query.password
  let options = {
    method: 'post',
    url: `https://api.imgflip.com/caption_image?template_id=${meme_id}&text0=${text0}&text1=${text1}&username=${userName}&password=${passWord}`
  }
  let result = await axios( options );
  console.log(result.data)
  res.status(200).send(result.data)
}
catch(err){
    res.status(500).send({Error:err.essage})
}
    }

module.exports.postMeme = postMeme