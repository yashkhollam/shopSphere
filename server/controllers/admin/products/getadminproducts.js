import ProductModel from "../../../model/products.js"


export const getadminproducts=async(req,res)=>{

    try{
           
      const {category,
        page=1,
        limit=10}=req.query;
      
    const pages=Number(page)
    const limits=Number(limit)


    const query={}

    if(category && category!=="all"){
        query.category=category
    }


    const skip=(pages-1)*limits

    const totalproducts=await ProductModel.countDocuments(query)

    const data=await ProductModel.find(query)
                                .skip(skip)
                                .limit(limits)
                                .sort({createdAt:-1})//new will be fetch first

    // if(data.length===0){
    //     return res.status(200).json({
    //         success:true,
    //         message:"empty data",
    //         data:[],
    //         totalproducts:totalproducts,
    //         currentpage:pages,
    //          totalpages:Math.ceil(totalproducts/limits),
            
    //     }) 
    // }

        return res.status(200).json({
            success:true,
            message:"product fetch for admin",
            data:data,
            totalpages:Math.ceil(totalproducts/limits),
            currentpage:pages,
             totalproducts:totalproducts,
        })
    }

 catch(err){
      return res.status(500).json({
            success:false,
            message:err.message,
            
        }) 
 }
    
}