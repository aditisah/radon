const productModel = require("../models/productModel");

const createProduct = async function(req,res){
let newProduct = req.body;
let productData = await productModel.create(newProduct)
return res.send({msg:productData});
}


module.exports.createProduct = createProduct;