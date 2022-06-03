const express = require('express');
const externalModule = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});
router.get('/sol1', function(req,res){
let arr = [1,2,3,4,5,7,8];
 let n=arr.length+1;
 //let n= arr.length+1;
// console.log(n);
 let sum = n*(n+1)/2;
// console.log(sum);
let sumOfArray = 0;
for(let i=0;i<arr.length;i++){
    sumOfArray = sumOfArray + arr[i];
}
let missingNumber = sum - sumOfArray;
res.send(`Missing number is: ${missingNumber}`);
})


router.get('/sol2', function(req,res){
    let arr = [35,36,38,39];
    const n = arr.length+1;
    const firstNumber = arr[0];
    const lastNumber = arr[arr.length-1];
    const sum = n*(firstNumber+lastNumber)/2;
    //console.log(arr[arr.length-1]);
    let sumOfTheArr = 0;
    //const sum = (arr.length+1)(arr[0]+arr[arr.length-1])/2;
    for(let i=0;i<arr.length;i++){
         sumOfTheArr = sumOfTheArr + arr[i];
        
        
    }
    const missingNumber = sum - sumOfTheArr; 
    res.send(`Missing number is: ${missingNumber}`);
})

module.exports = router;
// adding this comment for no reason