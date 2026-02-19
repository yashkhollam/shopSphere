
import userModel from '../model/userModel.js'
import { OTPcreationservice } from '../service/OTPcreationservice.js'

export const resendotp=async(req,res)=>{
    try{
        const {email}=req.body
        const accountexpiretime=new Date(Date.now()+ 30*60*1000)

         email=email.toLowerCase()
        const user=await userModel.findOne({email})

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        if(user && user.isverified===true){
             return res.status(400).json({
                success:false,
                message:"already user Please login"
            }) 
        }

        user.unverifiedAccountExpiresAt=accountexpiretime;
        await user.save()
        await OTPcreationservice(user)

        return res.status(200).json({
            success:true,
            message:"OTP resend successfully"
        })
    }
    catch(err){
        // if(err.message==="Too_many_OTP_requests"){
        //     return res.status(400).json({
        //         success:false,
        //         message:"Too many OTP requests. Try again later"
        //     })
        // }

        //  if(err.message==="Maximum_OTP"){
        //     return res.status(400).json({
        //         success:false,
        //         message:"Maximum OTP requests reached. Try again after 1 hour."
        //     })
        // }

        //  if(err.message==="Please_wait_1_mintute"){
        //     return res.status(400).json({
        //         success:false,
        //         message:"Please wait 1 mintute before requesting OTP again"
        //     })
        // }


          return res.status(400).json({
            success:false,
            message:err.message || "Someting went wrong"
        })
        
        
    }
}