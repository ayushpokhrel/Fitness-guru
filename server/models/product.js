const mongoose=require ('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{type:String},
    Qty:{type:String}
})

const productModel=mongoose.model('productModel',productSchema);
module.exports=productModel;