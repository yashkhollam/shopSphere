import joi from 'joi'




   export const LoginValidation=(req,res,next)=>{
        try{


         

       const Schema=joi.object({
      
        email:joi.string().email().trim().lowercase().required(),
        password:joi.string().max(50).min(4).required()
    }).unknown(false)


             const {error}=Schema.validate(req.body)

             if(error){
                return res.status(400).json({
                    success:false,
                    message:error.details[0]?.message
                })
             }
             next()
        }

        catch(err){
           
             return res.status(500).json({
                success:false,
                message:err.message||"Internal server problem"
            })
        }
    }



  export const SignupValidation=(req,res,next)=>{
    try{
         const Schema=joi.object({
              username:joi.string().max(50).min(3).required(),
           email:joi.string().email().trim().lowercase().required(),
            password:joi.string().max(50).min(4).required()
         }).unknown(false)


         const {error}=Schema.validate(req.body)

         if(error){
            return res.status(400).json({
                success:false,
                message:error.details[0]?.message
            })
         }

         next()
    }

    catch(err){
           return res.status(500).json({
                success:false,
                message:err.message||"Internal server problem"
            })
    }
   }



