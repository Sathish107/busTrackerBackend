const asyncHandler=require('express-async-handler')
const User=require('../models/userModel')
const jwt=require('jsonwebtoken')

const protect=asyncHandler(async (req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1]
            const decode=await jwt.verify(token,process.env.JWT_SECRET)
            const user=await User.findById(decode.id).select('-password')
            req.user=User
        }catch(err){
            if(err.name=="TokenExpiredError"){
                res.status(400).json({"message":"Token expired"})
            }else{
                res.status(400).json({"message":"Not Authorized"})
            }
        }
    }

    if(!token){
        res.status(400).json({"message":"No token found or unauthorized"})
    }
    
    if(!req.user){
        res.status(400).json({"message":"User no found in database"})
    }else{
        next()
    }
})

module.exports=protect