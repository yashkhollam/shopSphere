import ProductModel from "../../../model/products.js"


export const productfilter=async(req,res)=>{
    try{
      
        const {search,category="all"}=req.query
    
    const query={}

    // if(query.search===query.category){

    // }

    if(search && search.trim()!==""){
         query.$or=[
         {name:{$regex:search,$options:"i"}},
        {brand:{$regex:search,$options:"i"}},
        {category:{$regex:search,$options:"i"}},
         {subcategory:{$regex:search,$options:"i"}},
    ]
    } 

   
if(category && category!=="all"){
    query.category=category
}




    const result=await ProductModel.find(query)
                                
                                    

    return res.status(200).json({
        success:true,
        message:"filter product",
        data:result
    })

    }

    catch(err){
        console.log(err)
    }
}