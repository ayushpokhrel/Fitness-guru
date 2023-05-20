const mongoose=require('mongoose')

const gymSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    origin:{
        type:String
    }
})

const gymModel=mongoose.model('gymModel',gymSchema)
module.exports=gymModel