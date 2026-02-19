
import mongoose from "mongoose";


const userdataSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
       type:String,
       required:true
    },
    role:{
      type:String,
      enum:["user","admin"],
      default:"user",
      required:true
    },
    hashOtp:{
      type:String
    },
    isverified:{
        type:Boolean,
        default:false,
    },
    isActive:{
        type:Boolean,
        default:true
    },
    otpExpiredAt:{
        type:Date
    },
    otpAttempts:{
        type:Number,
        default:0
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
    unverifiedAccountExpiresAt:{
        type:Date,
        expires:0
    },
    otpBlockedUntil:{
        type:Date
    },
   
},{
    timestamps:true
})


// userdataSchema.index({unverifiedAccountExpiresAt:1},{expireAfterSeconds:0})

export default mongoose.model('userModel',userdataSchema)