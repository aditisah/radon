const cohortName = "  Backend Cohort";
const trimString = function (){
    //const trimmedString = cohortName.trim();
    console.log('trimmed string is:' + cohortName);
}

const changetoLowerCase = function(){
const lowercaseString=cohortName.toLowerCase();
console.log("hardcoded string in lowercase is:" + lowercaseString);
}

const changeToUpperCase = function(){
    const uppercaseString = cohortName.toUpperCase();
    console.log("hardcoded string in uppercase is:" + uppercaseString);
}






module.exports.trimmedValue = trimString;
module.exports.lowercaseString = changetoLowerCase;
module.exports.uppercaseString = changeToUpperCase;