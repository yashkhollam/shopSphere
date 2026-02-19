

export const roleAuthorization=async(req,res,next)=>{
   
try{
    
   
   if(!req.user){
      return res.status(401).json({
            success:false,
            message:"Authentication is required"
        })
   }

    if(req.user.role!=="admin"){
        return res.status(403).json({
            success:false,
            message:"Access denied"
        })
    }

    next();
}

catch(err){
    return res.status(500).json({
        success:false,
        message:err.message || "Internal server problem"
    })
}

}