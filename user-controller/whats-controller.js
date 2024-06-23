const User = require('../model/user');
const mongoose = require('mongoose');
const signup=async(req,res)=>{
    const {userId,img}=req.body;
    try {
        if(userId && img){
            const isAlreadyPresent=await User.findOne({userId:userId})
            if(isAlreadyPresent){
                return res.status(200).json({message:'User already exist',status:false})
            }
            const response=new User({userId,img});
            const register =await response.save()
                if(register){
                    return res.status(200).json({message:register,status:true})
                }
                else{
                    return res.status(500).json({message:'unabled to register',status:false})
                }

        }
        else{
            return res.status(200).json({message:'given information is incomplete'})
        }
        
    } catch (error) {
        return res.status(500).json({message:error})
    }
}

const signin=async(req,res,next)=>{
    const {userId}=req.body;
    let isEmail;
    let isPass;
    if(userId===''){
        return res.status(200).json({message:'UserId is missing',status:false})
    } 
    try {
        isEmail=await User.findOne({userId:userId});
        
        if(isEmail){
                return res.status(200).json({message:isEmail,status:true})
        }
        
        return res.status(200).json({message:'user not found !!',status:false})
    } catch (error) {
        return res.status(200).json({message:error,status:false})
    }
   
   
}

const gf= async(req,res)=>{
    try{
         const  getList=await User.findById(req.params.userId);

         return res.status(200).json({message:getList})
    } catch (error) 
    {
        return res.status(200).json({message:error,status:false})
    }

}
const all= async(req,res)=>{
    console.log(req.params)
    try{
         const  getList=await User.find({ _id: { $ne:mongoose.Types.ObjectId(req.params.userId)} })

         return res.status(200).json({message:getList})
    } catch (error) 
    {
        return res.status(200).json({message:error,status:false})
    }

}
exports.signin= signin
exports.signup = signup;
exports.gf = gf;
exports.all = all;
