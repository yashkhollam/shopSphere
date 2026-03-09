import { orderModel } from "../../../model/orderModel.js"



export const getorderbyid=async(req,res)=>{
    try{
          const {id}=req.params

          const order=await orderModel.findById(id).populate('userId','email')
          
          if(!order){
              return res.status(404).json({
            success:false,
            message:"order data not found"
        })
          }
 
          return res.status(200).json({
            success:true,
            message:"Order data fetch successfully",
            data:order
        })

          

    }


    catch(err){
        //  console.log(err.message)
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}