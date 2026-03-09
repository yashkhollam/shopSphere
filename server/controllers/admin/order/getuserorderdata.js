import { orderModel } from "../../../model/orderModel.js"



export const getuserOrderdata=async(req,res)=>{
    try{
         
  const userId=req.user.id
// const {userId}=req.body


const userorderdata=await orderModel.find({userId})
.sort({createdAt:-1})


if(userorderdata.length===0){
     return res.status(200).json({
            success:true,
            message:"no order yet"
        }) 
}


// if(!userorderdata){
//      return res.status(404).json({
//             success:true,
//             message:"no order yet"
//         }) 
// }

 return res.status(200).json({
            success:true,
            message:"order data fetch successfully",
            data:userorderdata
        }) 







    }

    catch(err){
        // console.log(err.message)
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}