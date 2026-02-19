import cartModel from "../../../model/cart.js"


export const addtoCart=async(req,res)=>{
    try{
    //    const userId=req.user.id
      const {userId}=req.body
       const {productId}=req.params

       let cart=await cartModel.findOne({userId})


       if(!cart){
           cart=new cartModel({
            userId,
            products:[{productId:productId,quantity:1}]
           })
       }
       else{
        const prodIndex=cart.findIndex((p)=>p.productId.toString()===productId)
       


        if(prodIndex>-1){
            cart.products[prodIndex].quantity+=1
        }else{
            cart.products.push({productId,quantity:1})
        }
       }

       await cart.save();
       return res.status(200).json({
        success:true,
        message:"Product added to cart"
       })
    }

    catch(err){
        console.log(err)
        res.status(500).json({
         success: false,
        message:err.message
     });
    }
}