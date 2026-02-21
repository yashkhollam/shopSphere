import cartModel from "../../model/cart.js"
import { getformatedcart } from "../../service/getformatedcart.js"


export const getuserCart=async(req,res)=>{
    try{
        // const {userId}=req.body
        const userId=req.user.id

        const cart= await cartModel.findOne({userId}).populate('products.productId')


         if(!cart){
            return res.status(404).json({
                success:false,
                message:"cart not found"
            })
        }

       

 const originalcartLength = cart.products.length;
        cart.products=cart.products.filter((p)=>p.productId!==null)
          
       if(cart.products.length!==originalcartLength){
         await cart.save()

       }
        

      const formatedCart=getformatedcart(cart)
   
      return res.status(200).json(formatedCart)
    
    }

    catch(err){
        console.log(err.message)
          return res.status(500).json({
            success:false,
            message:err.message,
           
        })
    }
}