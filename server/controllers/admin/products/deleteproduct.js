import cloudinary from "../../../config/cloudinary.js"
import ProductModel from "../../../model/products.js"


export const deleteproduct=async(req,res)=>{
    try{
        const {id}=req.params
           

          const deletedproduct=await ProductModel.findByIdAndDelete(id)

           if(!deletedproduct){
            return res.status(404).json({
                success:false,
                message:"product not found"
           })
           }

//          if (product.createdBy.toString() !== req.user.id) {
//    return res.status(403).json({
//       message: "Not authorized"
//    });
// }
          if(deletedproduct){
               await cloudinary.uploader.destroy(deletedproduct.publicId)

          }
          
      


           return res.status(200).json({
            success:true,
            message:"product deleted successfully",
            data:deletedproduct._id  
           })
    }

    catch(err){
        // console.log(err.message)
        return res.status(500).json({
            success:false,
            message:err.message,
           
           })
    }
}