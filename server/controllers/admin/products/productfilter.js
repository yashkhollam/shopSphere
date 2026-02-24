import ProductModel from "../../../model/products.js"


export const productfilter=async(req,res)=>{
    try{
      
        const {search,
            category="all",
            page=1,
            limit=6}=req.query
    
    const query={}
    const noofpages=Number(page);
    const nooflimits=Number(limit)
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

   
else if(category && category!=="all"){
    query.category=category
}


const skip=(noofpages-1)*nooflimits



const totalproducts=await ProductModel.countDocuments(query)
    const result=await ProductModel.find(query)
                                    .skip(skip)
                                    .limit(limit)
                                
     
                                

    return res.status(200).json({
        success:true,
        message:"filter product",
        data:result,
        totalProducts:totalproducts,
        totalPages:Math.ceil(totalproducts/limit),
        currentPage:noofpages
    })

    }

    catch(err){
        console.log(err)
    }
}