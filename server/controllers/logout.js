import userModel from "../model/userModel.js";



export const logout=async(req,res)=>{
    try{
       
       res.clearCookie("JWTTOKEN",{
                  httpOnly:true,
                  
               
                sameSite:"none",
                secure:true,   
       })

       return res.status(200).json({
        success:true,
        message:"Logged out  successfully"
       })

    }
    catch(err){
        // console.log(err)
         return res.status(500).json({
           success:false,
           message:err.message || "Internal server problem"
        })
    }
}