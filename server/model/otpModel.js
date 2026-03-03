import mongoose from "mongoose";


const otpSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel",
        required:true
    },

       hashOtp:{
      type:String,
      required:true
    },

    purpose:{
        type:String,
        enum:['signup','forgot-password'],
        required:true
    },
    otpExpiredAt:{
        type:Date,
        required:true,
        expires:0
    },
    otpAttempts:{
        type:Number,
        default:0,
        expires:0
    },

     otpAttemptBlockedUntil:{
        type:Date
    },
    otpSendCount:{
        type:Number,
        default:0
    }
    ,
    lastotpSendAt:{
        type:Date
    },
   
    otpBlockedUntil:{
        type:Date
    },
    isverified:{
        type:Boolean,
        default:false
    }
})


export const OtpModel=mongoose.model('OtpModel',otpSchema)