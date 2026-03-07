import { orderModel } from "../../../model/orderModel.js"


export const getAllorders=async(req,res)=>{
    try{
     
        
   const allOrders=await orderModel.find()
                                   


      console.log(allOrders[0].userId)                             

   if(allOrders.length<=0){
    return res.status(200).json({
        success:true,
        message:"No order yet"
    })
   }


const formatedorderdetail=allOrders.map((data)=>{
    
    const formatedDate=new Date(data.createdAt).toLocaleDateString("en-GB",{
        day:"2-digit",
        month:"short",
        year:"numeric"
    })

    return {
        id:data._id,
        username:data.shippingAddress.fullname,
        totalAmount:data.totalAmount,
        orderStatus:data.orderStatus,
        createdDate:formatedDate,
        paymentStatus:data.paymentStatus
    }
})

   return res.status(200).json({
    success:true,
    message:"fetch all Orders",
    data:formatedorderdetail
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