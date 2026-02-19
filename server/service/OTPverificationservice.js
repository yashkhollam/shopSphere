import bcrypt from 'bcrypt'


export const OTPverificationservice=async(otp,user)=>{
    
    const MAX_ATTEMPT=5;
    const currentTime=Date.now();
    const OTP_RESEND_UNTIL=new Date(Date.now()+ 60*60*1000)
   
   if(user.otpAttemptBlockedUntil){
       if(currentTime<user.otpAttemptBlockedUntil.getTime()){
           throw new Error("Too many wrong attempts.Try later")
       }
       else{
         user.otpAttempts=0;
         user.otpAttemptBlockedUntil=null;
         await user.save();
       }
   }



      if(user.otpAttempts>=MAX_ATTEMPT){
          
        user.otpAttemptBlockedUntil=OTP_RESEND_UNTIL 

        user.hashOtp=null;
        user.otpExpiredAt=null;


        await user.save() 
        throw new Error("Max_Attempt")
      
    }

     if (!user.hashOtp || !user.otpExpiredAt)
    throw new Error("OTP_Expired")

   
 if(currentTime>=user.otpExpiredAt.getTime()){
        throw new Error("OTP_Expired")
    }

 


    const isOTPmatched=await bcrypt.compare(otp.toString(),user.hashOtp)

    if(!isOTPmatched){
    
        user.otpAttempts+=1
        await user.save()
        throw new Error("INVALID_OTP")
    }


    user.otpAttempts=0;
    user.otpExpiredAt=null;
    user.hashOtp=null;
    user.otpAttemptBlockedUntil = null;
    

    await user.save();



    return {success:true}
}