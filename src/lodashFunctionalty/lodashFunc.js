const lodash = require('lodash');

const chunk = function(){
    const monthArr =["January","February","March","April","May","June","July","August","September","October","November","December"];
    const subArr = lodash.chunk(monthArr,3);
    console.log(subArr);
}


const tailFunc = function(){
    const oddNumbers = [1,3,5,7,9,11,13,15,17,19];
    const result = lodash.tail(oddNumbers,1);
    console.log("Last 9 numbers in array are: " + result);
}

const unionFunc = function(){
    const arr1 = [1,4];
    const arr2 = [2,4];
    const arr3 = [3,5];
    const arr4 = [1,5];
    const arr5 = [6,8];
    const mergedUniqueArr = lodash.union(arr1,arr2,arr3,arr4,arr5);
    console.log("Merged array of unique numbers is: " + mergedUniqueArr);
}
 
const fromPairsFunc = function(){
    let arr= [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    let result = lodash.fromPairs(arr);
    console.log(result);
}


module.exports.chunkFunc = chunk;
module.exports.tailFunc = tailFunc;
module.exports.union = unionFunc;
module.exports.createObjFunc = fromPairsFunc;