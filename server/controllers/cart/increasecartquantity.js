import cartModel from '../../model/cart.js'
import ProductModel from '../../model/products.js'
import { getformatedcart } from '../../service/getformatedcart.js'



export const increasecartquantity=async(req,res)=>{
    try{
    
          const userId=req.user.id
      //   const {userId}=req.body
        const {productId}=req.params
        console.log("ProductId from params:", productId)
 
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

        if(productIndex<=-1){
             return res.status(404).json({
            success:false,
            message:"product not found in cart",
           
         })
        }


        const product=await ProductModel.findById(productId)


        if(!product){
           return res.status(404).json({
            success:false,
            message:"product not found",
            
         })
        }

        const currentQuantity=cart.products[productIndex].quantity

        if(currentQuantity + 1 > product.stocks){
              return res.status(400).json({
               success:false,
            message:"product out of stock",
             
            })
        }

        
              cart.products[productIndex].quantity+=1
       await cart.save()
      

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