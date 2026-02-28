
import userModel from '../../../model/userModel.js'

export const getallusers=async(req,res)=>{
    try{

        const alluser=await userModel.find()

        if(alluser.length===0){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        }


        return res.status(200).json({
            success:true,
            message:"fetch all users",
            data:alluser
        })
    }

    catch(err){
        return res.status(500).json({
                success:false,
                message:err.message
            })
    }
}