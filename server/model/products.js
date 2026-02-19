import mongoose from 'mongoose';

const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    discountprice:{
        type:Number,
        required:true    
    },
    description:{
        type:String, 
    },
    category:{
        type:String,
    },
    subcategory:{
        type:String,
    },
    brand:{
        type:String
    },
    stocks:{
        type:Number
    },
    imgurl:{
        type:String
    },
     publicId:{
        type:String
     },
     createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"userModel"
        }
    
},{
    timestamps:true
})



const ProductModel=mongoose.model("productModel",ProductSchema)

export default ProductModel