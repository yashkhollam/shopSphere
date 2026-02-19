import ProductModel from "../../../model/products.js"




export const getproducts=async(req,res)=>{
    try{
        const  products=await ProductModel.find()


        const formateddata=products.map(data=>({
           prodId:data._id,
            prodname:data.name,
            proddescription:data.description,
            prodcategory:data.category,
            prodbrand:data.brand,
            prodstocks:data.stocks,
            productimg:data.imgurl
    }))

    return res.status(200).json({
        success:true,
        message:"products fetch successfully",
        data:formateddata
    })
 

    }

    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:err.message || "Internal server problem"
        })
    }
}