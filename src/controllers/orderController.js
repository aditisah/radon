const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");
const createOrder = async function(req,res){
    let orderData = req.body;
    let isFreeAppUserHeader = req.headers['isfreeappuser'];
    let productData = await productModel.findOne({_id: orderData.productId}).select({price:1,_id:0});
    let userData = await userModel.findOne({_id: orderData.userId}).select({balance:1,_id:0});
    console.log(productData.price)
    
    if(!orderData.userId || !orderData.productId){
        return res.send("Either userId or productId does not exist!!")
    }
    if(userData.balance<productData.price){
        return res.send("You don't have enough balance!!");
                }
    else{
        if(isFreeAppUserHeader=='true'){
            orderData.amount = 0;
            orderData.isFreeAppUser = true;
            let newOrder = await orderModel.create(orderData);
            return res.send({newOrder})
        }
        else{
            let balanceUpdate = await userModel.findOneAndUpdate(
                {_id: orderData.userId},
                {$inc:{balance: (-productData.price)}}
            )
            orderData.isFreeAppUser = false;
            orderData.amount = productData.price;
            let newOrder = await orderModel.create(orderData);
            return res.send({newOrder,balanceUpdate});
        }
    }
}

module.exports.createOrder = createOrder;