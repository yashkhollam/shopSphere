import ProductModel from "../../../model/products.js"


export const productfilter=async(req,res)=>{

 
    try{
      
        const {search,
            category="all",
            page=1,
            limit=8,
            brand="all",
            isTrending}=req.query
    
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

   
 if(category && category!=="all"){
    query.category=category
}

if(isTrending!==undefined){
    query.isTrending=isTrending==="true"
}


if(brand && brand!=="all"){
    query.brand=brand.toLowerCase()
}
const skip=(noofpages-1)*nooflimits



const totalproducts=await ProductModel.countDocuments(query)
    const result=await ProductModel.find(query)
                                    .sort({createdAt :-1})
                                    .skip(skip)
                                    .limit(nooflimits)
                                    
                                
     
                                

    return res.status(200).json({
        success:true,
        message:"filter product",
        data:result,
        totalProducts:totalproducts,
        totalPages:Math.ceil(totalproducts/nooflimits),
        currentPage:noofpages
    })

    }

    catch(err){
        console.log(err)
    }
}