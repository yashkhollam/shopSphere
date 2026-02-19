import userModel from "../model/userModel.js"
import bcrypt from 'bcrypt'
import {OTPcreationservice} from "../service/OTPcreationservice.js"



export const Signup=async(req,res)=>{
    try{
          const {username,email,password}=req.body

          const user=await userModel.findOne({email})
          // console.log(user)

          const accountexpiretime=new Date(Date.now()+ 30*60*1000)
         
          if(user && user.isverified===true){
            return res.status(409).json({
                success:false,
                message:"User exist!! Please login"
            })
          }

         
          const hashpassword=await bcrypt.hash(password,10)
             
          if(user && user.isverified===false){

           

            user.password=hashpassword;
             user.unverifiedAccountExpiresAt=accountexpiretime;

             await OTPcreationservice(user)
           
             
      
              return res.status(200).json({
            success:true,
            message:"Account not verified. OTP resent."
        })

          } 




           if(!user){

            const newuser=await userModel.create({
            username,
            email,
            password:hashpassword,
            isverified:false   
        })

         await OTPcreationservice(newuser)
         
          newuser.unverifiedAccountExpiresAt=accountexpiretime;
             
            await newuser.save();
         
              return res.status(200).json({
            success:true,
            message:"OTP sent successfully"
        })
           }

        


       


    }

    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:err.message || "Internal server problem"
        })
    }
}