import cloudinary from "../../../config/cloudinary.js"
import ProductModel from "../../../model/products.js"


export const deleteproduct=async(req,res)=>{
    try{
        const {id}=req.params
           const product=await ProductModel.findOne({_id:id})

           if(!product){
            return res.status(404).json({
                success:true,
                message:"product not found"
           })
           }

//          if (product.createdBy.toString() !== req.user.id) {
//    return res.status(403).json({
//       message: "Not authorized"
//    });
// }

           await cloudinary.uploader.destroy(product.publicId)

           await ProductModel.findByIdAndDelete(id)


           return res.status(200).json({
            success:true,
            message:"product deleted successfully",
            data:product._id
           })
    }

    catch(err){
        console.log(err.message)
        return res.status(500).json({
            success:false,
            message:err.message,
            data:product._id
           })
    }
}