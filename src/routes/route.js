const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController = require("../controllers/weatherController")
const memeController = require("../controllers/memeController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// router.get("/cowin/states", CowinController.getStates)
// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)

// router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getSessionsByDistrict", CowinController.getSessionsByDistrict)
router.get('/weather/londonByApiKey',weatherController.getWeatherOfLondon)
router.get('/weather/temperatureByCity',weatherController.getTemperatureByCity)
router.post('/meme/postMeme',memeController.postMeme)

module.exports = router;