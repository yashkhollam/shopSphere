// import bcrypt from 'bcrypt'
// import axios from 'axios'
// // import userModel from '../model/userModel.js'


// export const OTPcreationservice=async(user)=>{
   
//   try{


//   const MaxOTPSentAttempts=5;
//   const OTPresendblockDuration=new Date(Date.now()+60*60*1000)
//   const currentTime=Date.now();
//   const resendGap=1*60*1000
//   const otpExpireTime=new Date(Date.now() + 3*60*1000 )

// if(user.otpBlockedUntil){
//   if(currentTime<user.otpBlockedUntil.getTime()){

//       throw new Error("Too many OTP requests. Try again later")
// } else{
//     user.otpBlockedUntil=null;
//     user.otpSendCount=0;
// }
// }

// // user.

//   if(user.otpSendCount>=MaxOTPSentAttempts){

//     user.otpBlockedUntil=OTPresendblockDuration;
//     await user.save()
//     throw new Error("Maximum OTP requests reached. Try again after 1 hour.");

//   }
  

  
  
// if(user.lastotpSendAt){
//   const timepassed=currentTime-user.lastotpSendAt.getTime();

//    if(timepassed<resendGap){
//     throw new Error("Please wait 1 mintute before requesting OTP again")
//   }

// }
 


//       const otp=Math.floor(100000 + Math.random()* 900000)

//       const hashOtp=await bcrypt.hash(otp.toString(),10)

     

//        user.hashOtp=hashOtp;
//     user.lastotpSendAt=new Date();
//     user.otpExpiredAt=otpExpireTime;
//     user.otpAttempts=0;
//     user.otpSendCount+=1


    
//      await user.save()
    



//       await axios.post("https://api.brevo.com/v3/smtp/email",{
//         sender:{
//             email:process.env.shopSphere_Email,
//             name:"ShopSphere"
//         },
//         to:[{email:user.email}],
//         subject:"OTP verification from SHOPSPHERE",
//         htmlContent:
//         `
//         <h3>Hello ${user.username} </h3>

      
//         <h3>Thank you for choosing ShopSphere.
//             Using this OTP to complete your Signup procedures and verify your account on ShopSphere.
            
//             Remember,Never share this OTP with anyone,not even if ShopSphere ask to you</h3>

//         <h1><center>${otp}</center></h1>

      
//         <h4><center>OTP will expire in 3 minutes</center> </h4>
      
//       <h3>Regards</h3>
//       <h3>Team ShopSphere</h3>
//         `
      

//       },
//     {
//         headers:{
//             "api-key":process.env.BREVO_API_KEY,
//             "Content-Type":"application/json"
//         },
//     })

  

//     return {success:true}

//   }
//   catch(err){
//     console.log("OTP Error:", err.message);
//   throw err;
//   }
// }

// //  <h2>Your verification code is :</h2>
// //          <h2>OTP will expired in 3 minutes</h2>









import axios from "axios";
import bcrypt from "bcrypt";
import { OtpModel } from "../model/otpModel.js";

 export const OTPcreationservice = async (user,purpose) => {
  try {
   
    // const userId=await OtpModel.findOne({_id:user._id})

    await  OtpModel.deleteMany({userId:user._id,purpose})
    const otp = Math.floor(100000 + Math.random() * 900000);

    const hashOtp = await bcrypt.hash(otp.toString(), 10);
    const otpExpireTime = new Date(Date.now() + 3 * 60 * 1000);


    // Send Email via Brevo HTTP API
      await axios.post("https://api.brevo.com/v3/smtp/email",{
        sender:{
            email:process.env.shopSphere_Email,
            name:"ShopSphere"
        },
        to:[{email:user.email}],
        subject:`${purpose==="signup"?`OTP verification from SHOPSPHERE`:"Password Reset OTP ShopSphere"}`,
        htmlContent:
        
         `${purpose==="signup"? (`<h3>Hello ${user.username} </h3>

      
        <h3>Thank you for choosing ShopSphere.
            Using this OTP to complete your Signup procedures and verify your account on ShopSphere.
            
            Remember,Never share this OTP with anyone,not even if ShopSphere ask to you</h3>

        <h1><center>${otp}</center></h1>

      
        <h4><center>OTP will expire in 3 minutes</center> </h4>
      
      <h3>Regards</h3>
      <h3>Team ShopSphere</h3>
        `):(
          `<h3>Hello ${user.username},</h3>

<h3>
We received a request to reset your password for your ShopSphere account.
Use the OTP below to proceed with resetting your password.

If you did not request this password reset, please ignore this email. 
Your account remains secure.
</h3>

<h1><center>${otp}</center></h1>

<h4><center>OTP will expire in 3 minutes</center></h4>

<h3>Regards</h3>
<h3>Team ShopSphere</h3>`
        )}`
      },
    {
        headers:{
            "api-key":process.env.BREVO_API_KEY,
            "Content-Type":"application/json"
        },
    })
   
    
    
    await OtpModel.create({
      userId:user._id,
      purpose:purpose,
       otpAttempts:0,
    hashOtp:hashOtp,
     lastotpSendAt:new Date(),
    otpExpiredAt:otpExpireTime,
    otpSendCount:1,
   

    })

  

    return { success: true };

  }
    catch(err){
    console.log("OTP Error:", err.message);
  throw err;
  }
}


