import cloudinary from '../../../config/cloudinary.js';
import ProductModel from '../../../model/products.js';


export const uploadproduct=async(req,res)=>{
    try{
        
     const {name,price,discountprice,description,category,subcategory,brand,stocks}=req.body
    const  adminId=req.user.id
        if(!req.file){
            return res.status(400).json({
                success:false,
                message:"file is required"
            })
        }
    

  const isproductexist=await ProductModel.findOne({name:name})

  if(isproductexist){
    return res.status(400).json({
        success:false,
        message:"product already exist !!!"
    })
  }




     const {buffer,mimetype}=req.file
    
        const result=await cloudinary.uploader.upload(`data:${mimetype};base64,${buffer.toString("base64")}`,{
            folder:"products"
        })

        const imgurl=result.secure_url;
        const publicId=result.public_id

           await ProductModel.create({name,price,discountprice,description,category,subcategory,brand,stocks,imgurl,publicId,createdBy:adminId})

       


res.status(200).json({
    success:true,
    message:"Products added successfully"
})

    }

    catch(err){
        console.log(err.message)

       
        res.status(500).json({
      success: false,
      message: err.message,
    });
    }
}