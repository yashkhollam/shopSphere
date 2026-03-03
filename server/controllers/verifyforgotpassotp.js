import userModel from "../model/userModel.js"
import { OTPverificationservice } from "../service/OTPverificationservice.js"
import bcrypt from 'bcrypt'


export const resetpassword=async(req,res)=>{
    try{
         
    const {otp,email,password}=req.body

    console.log("req.body=",req.body)

    const user=await userModel.findOne({email})

     if(!user){
           return res.status(404).json({
            success:false,
            message:"user not found"
        })
        }


        if( !user.isverified){
             return res.status(401).json({
            success:false,
            message:"user not authenticated"
        })
        }

        if(!password ){
              return res.status(401).json({
            success:false,
            message:"Please provide the password"
        })
        }

        if(password.length<4){
             return res.status(401).json({
            success:false,
            message:"Password length must be greater then 4"
             })
            }

       

        await  OTPverificationservice(otp,user,"forgot-password")

         const issamepassword=await bcrypt.compare(password,user.password)

         if(issamepassword){
              return res.status(400).json({
            success:false,
            message:"new password is same as old password"
             })
         }

        const hashpassword=await bcrypt.hash(password,10)

        user.password=hashpassword;
        await user.save()


        return res.status(200).json({
            success:true,
            message:"Password changed Successfully "
        })


    }

    catch(err){
        console.log(err.message)
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}