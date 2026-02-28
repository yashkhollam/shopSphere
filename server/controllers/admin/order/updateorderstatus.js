import { orderModel } from "../../../model/orderModel.js"
import ProductModel from "../../../model/products.js"




export const updateorderstatus=async(req,res)=>{
    try{

         const {orderStatus}=req.body
         const {id}=req.params


    const orderdata=await orderModel.findById(id)

    if(!orderdata){
        return res.status(404).json({
            success:false,
            message:"order data not found"
        })
    }


    const validStatus=["pending","processing","shipped","delivered","cancelled"]

    if(!orderStatus){
        return res.status(400).json({
            success:false,
            message:"Order status not found"
        }) 
    }

    if(!validStatus.includes(orderStatus)){
          return res.status(400).json({
            success:false,
            message:"Invalid Order Status"
        })
    }


    if(orderdata.orderStatus==="delivered" || orderdata.orderStatus==="cancelled" ){
        return res.status(400).json({
            success:false,
            message:"Cannot update the order Status"
        })
    }






if(orderStatus==="cancelled"){
    orderdata.orderStatus=orderStatus;
    orderdata.isCancelled=true;
    orderdata.cancelledAt=Date.now()
   
  for(let item of orderdata.items){
       const  {productId,quantity}=item

       const product=await ProductModel.findById(productId)

       

       if(!product){
        return res.status(404).json({
            success:false,
            message:"product not found to restock"
        })
       }

       product.stocks+=quantity
       await product.save()
      
  }
 
       await orderdata.save()
       
//    return res.status(200).json({
//           success:true,
//             message:"product successfully restock"
//        })

   return res.status(200).json({
          success:true,
            message:"Order successfully cancelled"
       })

}



 
    if(orderStatus==="delivered"){
        orderdata.isDelivered=true;
        orderdata.deliveredAt=Date.now()
        orderdata.paymentStatus="paid"

         orderdata.orderStatus=orderStatus;
         await orderdata.save()

    }

    
  



    return res.status(200).json({
        success:true,
        message:`Order status update to ${orderStatus}`
    })

    

    }


    catch(err){
        console.log(err.message)
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}