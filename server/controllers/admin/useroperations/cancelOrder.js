import { orderModel } from "../../../model/orderModel.js"



export const  cancelOrder=async(req,res)=>{
    try{
      
        
        const orderId=req.params.id

    //  console.log("orderid",orderId)
    console.log("req.user",req.user)
        const userOrder=await orderModel.findById(orderId)
        if(!userOrder){
        return res.status(404).json({
            success:false,
            message:"Order not found"
        }) 
        }

        if(req.user.role!=="user"){
             return res.status(403).json({
            success:false,
            message:"Access Denied"
        }) 
        }

        console.log("userid",userOrder)

        if(req.user.id!==userOrder.userId.toString()){
            return res.status(403).json({
            success:false,
            message:"Access denied !!!"
        })  
        }


        

        if(userOrder.orderStatus==="cancelled"){
            return res.status(400).json({
            success:false,
            message:"Order is already cancelled"
        }) 
        }
       

         if(userOrder.orderStatus==="delivered"){
            return res.status(400).json({
            success:false,
            message:"Delivered order cannot be  cancelled"
        }) 
        }

        userOrder.orderStatus="cancelled"
        await userOrder.save();



        
            return res.status(200).json({
            success:true,
            message:"Order cancelled successfully",
            data:{
              orderId:orderId,
              orderStatus:userOrder.orderStatus
            }
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