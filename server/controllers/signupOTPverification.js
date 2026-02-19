import userModel from '../model/userModel.js'
import { OTPverificationservice } from '../service/OTPverificationservice.js'


export const signupOTPverification=async(req,res)=>{
    try{
         
  const {otp,email}=req.body

  const user=await userModel.findOne({email})

  if(!user){
    return res.status(404).json({
        success:false,
        message:"User not found"
    }) 
  }

  if(user.isverified===true){
    return res.status(400).json({
        success:false,
        message:"user already verified,Please login"
    })
  }

  await OTPverificationservice(otp,user)

    user.isverified=true;
    user.unverifiedAccountExpiresAt=null
             
         
  
   await user.save()

   return res.status(200).json({
    success:true,
    message:"OTP Successfully verified"
   })

}


    catch(err){
       return res.status(500).json({
            success:false,
            message:err.message || "Internal server problem"
        })
    
    }


}