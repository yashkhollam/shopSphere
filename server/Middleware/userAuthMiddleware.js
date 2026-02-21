import jwt from 'jsonwebtoken'

export const userAuthMiddleware=async(req,res,next)=>{
    try{
      const token=req.cookies.JWTTOKEN;

      if(!token){
        return res.status(401).json({
            success:false,
            // message:"Authenticaion token missing"
            message:"Please login to continue"
        })
      }

    //    console.log("Cookie received:", req.cookies);

      const decoded=jwt.verify(token,process.env.JWTSECRET)

    
      req.user=decoded

      next()
    }

    catch(err){
        console.log(err.message)
        return res.status(401).json({
            success:false,
            message:"Invalid or expired token"
        })
    }
}