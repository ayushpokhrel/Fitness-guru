const mongoose=require('mongoose')

const gymSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    discription:{
        type:String,
        // required:true
    }
    ,
    url:{
        type:String,
        // required:true
    },
    image: {
        data: Buffer, // The binary data of the image
        contentType: String // The MIME type of the image (e.g., 'image/jpeg', 'image/png')
      }
})

const gymModel=mongoose.model('gymModel',gymSchema)
module.exports=gymModel