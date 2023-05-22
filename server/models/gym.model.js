const mongoose=require('mongoose')

const gymSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    }
    ,
    url:{
        type:String,
        required:true
    }
})

const gymModel=mongoose.model('gymModel',gymSchema)
module.exports=gymModel