const mongoose =require('mongoose')
const loginSchema =new mongoose.Schema({
    userId:{
        type:String,
        required:true
    }
    ,
    img:{
        type:String,
        required:true
    },
})
const model=mongoose.model('whats',loginSchema);
module.exports=model;