import mongoose from 'mongoose'




const orderItemSchema=mongoose.Schema({
            productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"productModel",
            required:true
            },
            productName:{
                type:String,
                 required:true
            },
            price:{
                type:Number,
                 required:true
            },
            quantity:{
                type:Number,
                 required:true,
                 min:1
                
            },
            prodimage:{
               type:String
            },
            subtotal:{
                type:Number,
                 required:true,
                 min:0
            },
           
        },{_id:false})


const ShippingAddressSchema=mongoose.Schema({
   fullname:{
      type:String,
      required:true
      },
      phone:{
        type:String,
        required:true
      },
      addressline:{
        type:String,
        required:true
      },
      city:{
        type:String,
        required:true
      },
      state:{
        type:String,
        required:true
      },
      pincode:{
        type:String,
        required:true
      },
      country:{
        type:String,
        required:true
      },
    

},{_id:false})

const orderSchema=mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel",
        required:true
    },
    items:{
     type:[orderItemSchema],
    required:true
    },
        
 
    totalAmount:{
        type:Number,
        required:true,
        min:0
    },
    shippingAddress:{
      type:ShippingAddressSchema,
      required:true
    },

    paymentMethod:{
        type:String,
        enum:["COD"],
        required:true,
        default:"COD"
    },
    paymentStatus:{
        type:String,
        enum:["pending","paid","failed"],
        default:"pending"
       
    },
    orderStatus:{
        type:String,
        enum:["pending","processing","shipped","delivered","cancelled"],
        default:"pending"
    },

  isDelivered:{
    type:Boolean,
    default:false
  },

  deliveredAt:{
    type:Date
  },

  isCancelled:{
    type:Boolean,
    default:false
  },

  cancelledAt:{
    type:Date
  }

     
},{
    timestamps:true
})


export const orderModel=mongoose.model("orderModel",orderSchema)