import cartModel from "../../model/cart.js"
import { getformatedcart } from "../../service/getformatedcart.js"

export const removecartitem=async(req,res)=>{
    try{
        const   userId=req.user.id
        // const {userId}=req.body
        const {productId}=req.params


        const cart=await cartModel.findOne({userId}).populate('products.productId')

        if(cart.products.length<=0){
            return res.status(401).json({
                success:false,
                message:"cart not found"
            })
        }

        const  productIndex=cart.products.findIndex((p)=>p.productId._id.toString()===productId)


         if(productIndex===-1){
             return res.status(401).json({
                success:false,
                message:"Product not found in cart"
            }) 
         }


       
            cart.products.splice(productIndex,1)

            await cart.save()
        
        const result=getformatedcart(cart)

        result.message="Product removed from cart"

         return res.status(200).json(result)
       
    }

    catch(err){
        // console.log(err);
         return res.status(500).json({
            success:false,
            message:err.message,
           
         })
        
    }
}