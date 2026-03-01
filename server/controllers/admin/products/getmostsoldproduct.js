import ProductModel from "../../../model/products.js"


export const getmostsoldproduct=async(req,res)=>{
    try{
       


         const mostSold=await  ProductModel.find({soldcount:{$gt:0}})
                                     .sort({soldcount:-1})
                                     .limit(8)
        

         return res.status(200).json({
                success:true,
                message:"successfully fetch most sold products",
                data:mostSold
            })

    }

    catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
