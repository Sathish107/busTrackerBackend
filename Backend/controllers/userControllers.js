const asyncHandler=require("express-async-handler")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/userModel')

const signUp=asyncHandler(async (req,res)=>{
    const {userName,email,password}=req.body
    if(userName&&email&&password){
        const user=await User.findOne({"email":email})
        if(user){
            res.status(400).json({"message":"User with same email is already exist"})
        }else{
            const salt=await bcrypt.genSalt(10)
            const hashedPassword=await bcrypt.hash(password,salt)
            const newUser=await User.create({
                userName:userName,
                email:email,
                password:hashedPassword
            })

            if(newUser){
                res.status(201).json({"new user":{
                    id:newUser.id,
                    userName:newUser.userName,
                    email:newUser.email,
                    token:generateNewToken(newUser.id)
                }})
            }else{
                res.status(400).json({"message":"unable to signup"})
            }
        }
    }else{
        res.status(400).json({"message":"Enter all fields"})
    }
})

const signIn=asyncHandler(async (req,res)=>{
    const {email,password}=req.body
    if(email&&password){
        const user=await User.findOne({"email":email})
        if(!user){
            res.status(400).json({"message":"No user found"})
        }else{
            if(await bcrypt.compare(password,user.password)){
                res.status(201).json({"new user":{
                    id:user.id,
                    userName:user.userName,
                    email:user.email,
                    token:generateNewToken(user.id)
                }})
            }else{
                res.status(400).json({"message":"wrong password"})
            }
        }
    }else{
        res.status(400).json({"message":"Enter all fields"})
    }
})

const generateNewToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'3d'})
}

module.exports={
    signUp,
    signIn
}