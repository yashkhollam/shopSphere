import userModel from '../model/userModel.js'
import { OTPcreationservice } from '../service/OTPcreationservice.js'

export const forgotpassword=async(req,res)=>{
    try{
         
        const {email}=req.body
        // console.log(email)

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

        await OTPcreationservice(user,"forgot-password")


        return res.status(200).json({
            success:true,
            message:"OTP send sucssfully"
        })
    }

    

    catch(err){
        console.log(err.message)
        return res.status(500).json({
            success:err.message
        })
    }
}