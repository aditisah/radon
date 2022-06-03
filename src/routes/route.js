const express = require('express');
const router = express.Router();
let players = 
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
        "swimming"
        ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
            "soccer"
            ]
            },
        {
            "name": "gopal",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
            "soccer"
        ]
}
]
router.post('/players', function (req, res) {
    let newPlayer = req.body;
    const IsPlayerExisted = players.some(player=>player.name === newPlayer.name);
    if(!IsPlayerExisted){
        players.push(newPlayer);
        res.send(players);
    }
    else{
        res.send('Player already exists!');
    }
    //console.log()
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason