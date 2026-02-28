
import userModel from '../../../model/userModel.js' 

export const userStatus=async(req,res)=>{
    try{
      

   const {isActive}=req.body
   const {id}=req.params
   const adminId=req.user.id


  
   const user=await userModel.findById(id)
   
 

   
  if(typeof isActive!=="boolean"){
      return res.status(400).json({
        success:false,
        message:"isActive is invalied"
    })
  }

    if(!user){
    return res.status(404).json({
        success:false,
        message:"user not found"
    })
   }

   if(adminId===id){
      return res.status(403).json({
        success:false,
        message:"Admin connot block himself"
    })
   }

   if(user.role==="admin"){
      return res.status(403).json({
        success:false,
        message:"admin cannot block another admin"
    })
   }

   user.isActive=isActive
   await user.save()

    return res.status(200).json({
        success:true,
        message:isActive ? "user unblocked successfully" :"User blocked successfully",
        data:{
            id:user._id,
            isActive:user.isActive
        }
    })



    }

    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}