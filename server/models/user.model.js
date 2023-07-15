const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{type:String},
    phone:{type:Number},
    password:{
        type:String,
        required:true
    }, file:{
        type:String,
    }
})

const userModel=mongoose.model('userModel',userSchema);
module.exports=userModel;