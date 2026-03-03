import bcrypt from 'bcrypt'
import { OtpModel } from '../model/otpModel.js';


export const OTPverificationservice=async(otp,user,purpose)=>{
 
    const MAX_ATTEMPT=5;
    const currentTime=Date.now();
    const OTP_RESEND_UNTIL=new Date(Date.now()+ 60*60*1000)
   
   
let otpdata=await  OtpModel.findOne({userId:user._id,purpose:purpose})


if(!otpdata){
     throw new Error("OTP_Expired")
}



   if(otpdata.otpAttemptBlockedUntil){
       if(currentTime<otpdata.otpAttemptBlockedUntil.getTime()){
           throw new Error("Too many wrong attempts.Try later")
       }
       else{
         otpdata.otpAttempts=0;
         otpdata.otpAttemptBlockedUntil=null;
         await otpdata.save();
       }
   }

  
 if(currentTime>=otpdata.otpExpiredAt.getTime()){
         await OtpModel.deleteOne({ _id: otpdata._id });
        throw new Error("OTP_Expired")
    }

      
   

    const isOTPmatched=await bcrypt.compare(otp.toString(),otpdata.hashOtp)

    if(!isOTPmatched){

        otpdata.otpAttempts+=1

        if(otpdata.otpAttempts>=MAX_ATTEMPT){
         otpdata.otpAttemptBlockedUntil=OTP_RESEND_UNTIL
        
         await otpdata.save()
        throw new Error("Max_Attempt")
      
    }


        await otpdata.save()
        throw new Error("INVALID_OTP")

        
    }

  await OtpModel.deleteOne({ _id: otpdata._id });
    

  


    return {success:true}
}