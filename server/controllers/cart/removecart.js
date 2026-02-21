import cartModel from "../../model/cart.js"

export const removecartitem=async(req,res)=>{
    try{
        const   userId=req.user.id
        // const {userId}=req.body
        const {productId}=req.params


        const cart=await cartModel.findOne({userId})

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
        

         return res.status(200).json({
            success:true,
            message:"product removed from cart",
            data:cart
         })
       
    }

    catch(err){
        console.log(err);
         return res.status(500).json({
            success:false,
            message:err.message,
           
         })
        
    }
}