import userModel from "../model/userModel.js"


export const userProfile=async(req,res)=>{
    try{
         const {id}=req.user

        const user=await userModel.findById(id)

        if(!user)
            return res.status(404).json({
           success:false,
           message:"user not found"
        })

        if(!user.isActive){
            return res.status(403).json({
                success:false,
                message:"Your account has been blocked"
             }) 
         }


         


        return res.status(200).json({
            success:true,
            message:"fetch user successfully",
             data:{
                  id:user._id,
                  username:user.username,
                  role:user.role,
                  email:user.email,
                  isActive:user.isActive
             }
        })
    }

    catch(err){
            return res.status(500).json({
            success:false,
             message:err.message || "Internal server problem"
         })
    }
}