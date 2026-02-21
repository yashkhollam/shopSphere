import userModel from "../model/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';




export const login=async(req,res)=>{
    try{
         const {email,password}=req.body;

         const user=await userModel.findOne({email});

         if(!user){
             return res.status(404).json({
                success:false,
                message:"User not found"
             })
         }

         if(!user.isverified){
              return res.status(401).json({
                success:false,
                message:"Please verify your account first"
             })
         }

         if(!user.isActive){
            return res.status(401).json({
                success:false,
                message:"Your account has been blocked"
             }) 
         }

         const hashpassword=await bcrypt.compare(password,user.password)

         if(!hashpassword){
            return res.status(401).json({
                success:false,
                message:"Invalid password"
            })
         }

         const token=jwt.sign({
            id:user._id,
            role:user.role,
            email:user.email},
            process.env.JWTSECRET,
            {expiresIn:'24h'})
       
            res.cookie('JWTTOKEN',token,{
                httpOnly:true,
                //   secure:process.env.NODE_ENV==="production", //true in production
          
                secure:true,      
                sameSite:"none", //none in production
                maxAge:24*60*60*1000
            })

            return res.status(200).json({
               success:true,
               message:"login successfully",
               data:{
                   id:user._id,
                   username:user.username,
                   role:user.role,
                   email:user.email
               } 
            })
    }

    catch(err){
         return res.status(500).json({
            success:false,
             message:err.message || "Internal server problem"
         })
    }
}