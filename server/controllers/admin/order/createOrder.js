
import { orderModel } from '../../../model/orderModel.js';
import productModel from '../../../model/products.js'
import usercart from '../../../model/cart.js';


export const createOrder=async(req,res)=>{
  try{
    const userId=req.user.id
    
    
       const  {items,shippingAddress,
       paymentMethod}=req.body;

       let orderItems=[]
       let totalAmount=0
       let producttoupdate=[];

        if(req.user.role==="admin"){
          return res.status(403).json({
            success:false,
            message:"Admin cannot place order"
        })
       }
       
         if(!items){
          return res.status(400).json({
        success:false,
        message:"Items are required"
    })
       }

       if(!Array.isArray(items)){
         return res.status(400).json({
        success:false,
        message:"Items must be an array"
    })
       }
       
       if(items.length===0){
         return res.status(400).json({
        success:false,
        message:"cart empty"
    })
       }

       if(!shippingAddress){
           return res.status(400).json({
        success:false,
        message:"please provide shipping Address"
    })
       }


       if(!paymentMethod){
          return res.status(400).json({
        success:false,
        message:"please provide payment method"
    })}



   
for(let productItem of items){

   const  {productId,quantity}=productItem

  
   let  product=await productModel.findById(productId)

   if(!product){
      return res.status(404).json({
        success:false,
        message:"Product not found"
    })
   }

   

   if(quantity===undefined){
     return res.status(400).json({
        success:false,
        message:"please provide product quantity"
    })
   }


   if(typeof quantity!=="number"){
     return res.status(400).json({
        success:false,
        message:"quantity should be number"
    })
   }


   if(quantity<=0){
      return res.status(400).json({
        success:false,
        message:"quantity should be greater then 0"
    })
   }

   if(product.stocks<quantity){
    return res.status(400).json({
        success:false,
        message:"product is out of stock"
    })
   }
   
 producttoupdate.push({product,quantity}) //to upadte the stocks

   

   let finalPrice=0;

   if(product.discountprice &&product.discountprice>0 ){
       finalPrice=product.discountprice
   }
   else{
    finalPrice=product.price
   }


let subtotal=finalPrice*quantity

totalAmount+=subtotal

orderItems.push({
    productId:product._id,
  productName:product.name,
  price: finalPrice,
  quantity: quantity,
  prodimage:product.imgurl,
  subtotal: subtotal
})


  
}


const newOrder=await orderModel.create({userId,items:orderItems,totalAmount,shippingAddress,paymentMethod})


for (let updatedProduct of producttoupdate) {
  updatedProduct.product.soldcount+=updatedProduct.quantity
  console.log(updatedProduct.product.soldcount)
   updatedProduct.product.stocks -= updatedProduct.quantity
    
   await updatedProduct.product.save()
}



await usercart.updateOne({userId:userId},{$set:{products:[]}})

return res.status(201).json({
   success: true,
   message: "Order placed successfully",
   order: newOrder
})
}
  
  
  catch(err){
    // console.log(err)
    return res.status(500).json({
        success:false,
        message:err.message
    })
  }
}