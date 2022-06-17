let axios = require("axios")

 let getSessionsByDistrict = async function(req,res){
    try{
        let districtId = req.query.district_id;
        let date = req.query.date;
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
        }
        let result = await axios( options );
        let sessions = result.data
        res.status(200).send({msg: sessions})
    }
 catch(err){
    res.status(500).send({msg:err.message})
 }
 }

module.exports.getSessionsByDistrict = getSessionsByDistrict