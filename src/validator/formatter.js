
const trimString = function (){
    const cohortName = "  Backend Cohort  ";
    const trimmedString = cohortName.trim();
    console.log('trimmed string is:' + trimmedString);
}

const changetoLowerCase = function(){
    const name = "ADITI SAH";
const lowercaseString=name.toLowerCase();
console.log("hardcoded string in lowercase is:" + lowercaseString);
}

const changeToUpperCase = function(){
    const name = "AdiTi sah";
    const uppercaseString = cohortName.toUpperCase();
    console.log("hardcoded string in uppercase is:" + uppercaseString);
}






module.exports.trimmedValue = trimString;
module.exports.lowercaseString = changetoLowerCase;
module.exports.uppercaseString = changeToUpperCase;