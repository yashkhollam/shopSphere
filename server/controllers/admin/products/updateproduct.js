import cloudinary from "../../../config/cloudinary.js"
import ProductModel from "../../../model/products.js"



export const updateproduct=async(req,res)=>{

    try{
       const {name,price,discountedpercentage,description,category,subcategory,brand,stocks}=req.body

       console.log("re.body=",req.body)
       const {id}=req.params

    
       const product=await ProductModel.findById(id)

     if(!product){
        
        return res.status(404).json({
            success:false,
            message:"prouct not found"
        })
    
    }


    
  if(discountedpercentage>100){
      return res.status(400).json({
        success:false,
        message:"Discount perentage should be less then 100"
    })
  }

   

    if(req.file){
           const {mimetype,buffer}=req.file
    const result=await cloudinary.uploader.upload(`data:${mimetype};base64,${buffer.toString('base64')}`,{
        folder:"products"
    })

    
          await cloudinary.uploader.destroy(product.publicId)
    product.imgurl=result.secure_url;
    product.publicId=result.public_id
         
   
}
     
    
    
         
     product.name=name;
     product.price=price;
     product.discountedpercentage=discountedpercentage;
     product.discountprice=price-(Number(discountedpercentage)*Number(price)/100)
     product.description=description;
     product.category=category;
     product.subcategory=subcategory;
     product.brand=brand;
     product.stocks=stocks
     await product.save()



    

    
     console.log(product);
    return res.status(200).json({
        
       success:true,
       message:"product updated successfully",
       data:product
    })
    }

    catch(err){
        console.log(err)
         return res.status(500).json({
       success:false,
       message:err.message
     
    })
    }
    
}


