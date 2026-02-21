import cartModel from "../../model/cart.js"
import { getformatedcart } from "../../service/getformatedcart.js"




export const  decreasecartquantity=async(req,res)=>{
    try{

      //   const {userId}=req.body
       const userId=req.user.id

        const {productId}=req.params


         const cart=await cartModel.findOne({userId}).populate('products.productId')

         if(!cart){
            return res.status(404).json({
            success:false,
            message:"cart not found",
            
         })
         }

         const orignalproduct=cart.products.length
         cart.products=cart.products.filter((p)=>p.productId!==null)

         if(cart.products.length!==orignalproduct){
             await cart.save()
         }

         
  const productIndex=cart.products.findIndex((p)=>p.productId._id.toString()===productId)


  if(productIndex===-1){
      return res.status(404).json({
            success:false,
            message:"product not found in cart",
            
         })
  }


if(cart.products[productIndex].quantity===1){
        //   return res.status(200).json({
        //     success:true,
        //     message:"Minimum quantity is 1",
            
        //  })


        cart.products.splice(productIndex,1);
        await cart.save();
      const result=getformatedcart(cart)


        return res.status(200).json(result)
    }     


  else if (cart.products[productIndex].quantity>1){
        cart.products[productIndex].quantity-=1;
        await cart.save()
  }

 
const result=getformatedcart(cart)


   return res.status(200).json(result)
    }   
    catch(err){
        console.log(err)
         return res.status(500).json({
            success:false,
            message:err.message,
          
         })
    } 
}