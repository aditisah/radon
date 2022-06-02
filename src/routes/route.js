const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('../lodashFunctionalty/lodashFunc');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();

const movieArr = [ {
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    lodash.chunkFunc();
    lodash.tailFunc();
    lodash.union();
    lodash.createObjFunc();
    res.send('Hello there!')
});
router.get('/movies', function(req,res){
    const movieArr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    res.send(movieArr);
})
router.get('/movies/:indexNumber', function(req,res){
    const movieArr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    if(req.params.indexNumber<movieArr.length){
        const movie = movieArr[req.params.indexNumber];
        res.send("Selected movie by index is: " + movie);
    }
    else{
        res.send("Oops!You have entered the invalid index.");
    }
})
router.get('/films', function(req,res){
    
       res.send(movieArr);
    })
    router.get('/films/:filmId', function(req,res){
        for(let i=0;i<movieArr.length;i++){
            if(movieArr[i].id==req.params.filmId){
                res.send(movieArr[i]);
            }
            }
                res.send("Oops!!No movie exists with this id.");
        
        })
// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })


module.exports = router;
// adding this comment for no reason