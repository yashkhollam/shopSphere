
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
    
     isActive:{
        type:Boolean,
        default:true
    },

    isverified:{
        type:Boolean,
        default:false,
    },

    unverifiedAccountExpiresAt:{
        type:Date,
        expires:0
    },
    
   
},{
    timestamps:true
})


// userdataSchema.index({unverifiedAccountExpiresAt:1},{expireAfterSeconds:0})

export default mongoose.model('userModel',userdataSchema)