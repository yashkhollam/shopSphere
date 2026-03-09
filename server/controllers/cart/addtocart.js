import cartModel from "../../model/cart.js"
import { getformatedcart } from "../../service/getformatedcart.js"


export const addtoCart=async(req,res)=>{
    try{
        const userId=req.user.id
    //   const {userId}=req.body
   
       const {productId}=req.params


        if(req.user.isActive===false){
        return res.status(401).json({
            success:false,
            message:"user account has been blocked"
        })
       }

       if(req.user.role==="admin"){
          return res.status(403).json({
            success:false,
            message:"Admin cannot add product to cart"
        })
       }


       let cart=await cartModel.findOne({userId}).populate('products.productId')

      

       if(!cart){
           cart=new cartModel({
            userId,
            products:[{productId:productId,quantity:1}]
           })
       }
       else{
        const prodIndex= cart.products.findIndex((p)=>p.productId._id.toString()===productId.toString())
       


        if(prodIndex>-1){
            cart.products[prodIndex].quantity+=1
        }else{
            cart.products.push({productId,quantity:1})
        }
       }

       await cart.save();

       const result=getformatedcart(cart)

       result.message="Product added to cart"
       return res.status(200).json(result)
    }

    catch(err){
        // console.log(err)
        res.status(500).json({
         success: false,
        message:err.message
     });
    }
}