const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{type:String},
    password:{
        type:String,
        required:true
    }
})

const userModel=mongoose.model('userModel',userSchema);
module.exports=userModel;