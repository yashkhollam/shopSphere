import ProductModel from "../../../model/products.js"


export const updateTrendingStatus=async(req,res)=>{
    try{
      
const {id}=req.params
const {isTrending}=req.body


const product=await ProductModel.findById(id)


if(!product){
    return res.status(404).json({
        success:false,
        message:"Product not found"
    })
}


if(isTrending===undefined){
      return res.status(400).json({
        success:false,
        message:"Invalid request"
    })
}

if(typeof isTrending==="boolean"){
   product.isTrending=isTrending
}

else{
     product.isTrending=isTrending==="true"
}

 

    await product.save()

    return res.status(200).json({
        success:true,
        message:"Trending status updated successfully",
        data:{
            id:product._id,
            isTrending:product.isTrending
        }
    })




    }

    catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
        console.log(err.message)
    }
}