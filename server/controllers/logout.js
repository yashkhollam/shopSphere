import userModel from "../model/userModel.js";



export const logout=async(req,res)=>{
    try{
       
       res.clearCookie("JWTTOKEN",{
                  httpOnly:true,
                  secure:process.env.NODE_ENV==="production", //true in production
                sameSite:"none", //none in production
               
       })

       return res.status(200).json({
        success:true,
        message:"Logged out  successfully"
       })

    }
    catch(err){
        console.log(err)
         return res.status(500).json({
           success:false,
           message:err.message || "Internal server problem"
        })
    }
}