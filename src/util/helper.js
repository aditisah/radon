const date = new Date();
const printDate = function(){
    console.log(date);
}

const printMonth = function(){
    const month = date.getMonth();
    console.log(month);
}
const getBatchInfo = function(){
    console.log("Radon,W3D3,The topic for the day is Nodejs Module System");
}
module.exports.date = printDate;
module.exports.month = printMonth;
module.exports.batchDetail = getBatchInfo;