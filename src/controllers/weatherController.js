let axios = require('axios');
let apiKey = '39cc3455eaa1a44e82e1ac2a74e2ddbc'
let getWeatherOfLondon = async function(req,res){
    try{
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`
          }
          let result = await axios( options );
          //let data = result.data;
          let temp = result.data.main.temp;
          res.status(200).send({temperature: temp})
    }
 catch(err){
    res.status(500).send({msg:err.message})
 }
}
let getTemperatureByCity = async function(req,res){
    try{
        let cities = ["Mumbai","London","Delhi", "Kolkata", "Chennai", "London", "Moscow"];
  let finalRes = {};
  let cityArr = [];
  let sortedByTemp =[];
  for(let i=0;i<cities.length;i++){
      finalRes = {
   city: cities[i]
     }
    let options = {
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${apiKey}`
      }
      //console.log(options.url)
      let result = await axios(options);
      //finalRes.city = result.data.name
   finalRes.temp = result.data.main.temp
   cityArr.push(finalRes)
       //finalRes.push(result.data.main.temp).sort;
        sortedByTemp = cityArr.sort(function(x,y){
        return x.temp-y.temp
       })
  }
  res.status(200).send({sortedByTemp})
    }
  catch(err){
    res.status(500).send({msg:err.message})
  }
  
}
module.exports.getWeatherOfLondon = getWeatherOfLondon;
module.exports.getTemperatureByCity = getTemperatureByCity;