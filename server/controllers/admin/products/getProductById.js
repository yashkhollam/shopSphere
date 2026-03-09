import ProductModel from "../../../model/products.js";



export const getProductById=async(req,res)=>{
    try{
        const {productId}=req.params;


        const product=await ProductModel.findById(productId)

        if(!product){
            return res.status(404).json({
                success:false,
                message:"Product not found"
            })
        }

    return res.status(200).json({
        success:true,
        message:"product fetch",
        data:product
    })

    }

    catch(err){
        // console.log(err)
         return res.status(500).json({
        success:false,
        message:err.message,
        
    })
        
    }
}