


export const getformatedcart=(cart)=>{
    
       
        let carttotal=0
        let cartdiscounttotal=0
        // let deliverycharge=0
        
        const validcartdata=cart.products.filter((p)=>p.productId!==null)

       if(validcartdata.length<=0){
          return ({
              success:true,
            message:"cart is empty",
            carttotalprice:0,
            carttotaldiscountprice:0,
            data:[]
          })
       }
       
        const cartData=validcartdata.map((item)=>{

    
       

            const prodprice=item.productId.price;
            const proddiscountprice=item.productId.discountprice;
            const productqty=item.quantity;

            const producttotal=prodprice*productqty
            const productdiscounttotal=proddiscountprice*productqty


          


            carttotal+=producttotal;
            cartdiscounttotal+=productdiscounttotal

           
           

          return{ prodId: item.productId._id,
        prodname: item.productId.name,
        proddescription: item.productId.description,
        prodcategory: item.productId.category,
        prodbrand: item.productId.brand,
        prodstocks: item.productId.stocks,
        productimg: item.productId.imgurl,
        quantity: productqty,
        prodtotalprice: producttotal, 
        prototaldiscprice:productdiscounttotal
          

         }
        })


     return  {
            success:true,
            message:"fetch cart items",
            carttotalprice:carttotal,
            carttotaldiscountprice:cartdiscounttotal,
            // deliverycharge:deliverycharge,
            data:cartData
        }
}