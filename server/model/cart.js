import mongoose from "mongoose";

const cartSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel",
        required:true
    },
    products:[
        {
            productId:{
                 type:mongoose.Schema.Types.ObjectId,
        ref:"productModel",
            },
            quantity:{
                type:Number,
                default:1
            },
            
        },
       
    ],
    
},{
    timestamps:true
})


const cartModel=mongoose.model('usercart',cartSchema)

export default cartModel