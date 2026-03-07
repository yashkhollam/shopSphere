import React, { useEffect } from "react";
import { Carousel } from "bootstrap";
import styles from '../css/home.module.css'
import { useDispatch ,useSelector} from "react-redux";
import { getAllfilterddata, getMostsoldproduct, getTrendingproduct, setBrand, setCategory } from "../components/redux/features/productSlice";
import {useNavigate} from 'react-router-dom'
import { addtocartthunk } from "../components/redux/features/cartSlice";
import {toast} from 'react-hot-toast'
import Loader from "../components/loader";
import Footer from "../components/footer";

function Home() {
 
const dispatch=useDispatch()
const navigate=useNavigate()

const {Allfilterddata,trendingproducts,mostsold}=useSelector((state)=>state.productoperation)


  useEffect(() => {
  dispatch(getAllfilterddata({limit:8}))
  dispatch(getTrendingproduct({limit:8,isTrending:true}))
  dispatch(getMostsoldproduct())

    const element = document.querySelector('#carouselExampleSlidesOnly');

    if (element) {
      new Carousel(element, {
        interval:3000,
        touch: true,
        ride: "carousel"
      });
    }
    
  }, [dispatch]);



  const productcategory=[
    {name:"mobile",imgurl:"/product/iphone17pro.png",value:"MobilesTablets"},
    {name:"laptop",imgurl:"/product/mac air 13 laptop.png" ,value:"LaptopsComputers"},
    {name:"Audio devices",imgurl:"/product/audio.webp",value:"AudioDevices"},
    {name:"smart Gadgets",imgurl:"/product/watch.png",value:"SmartGadgets"},
    {name:"Gaming",imgurl:"/product/games.png",value:"Gamings"},
  ]

const custservice= [
  {
    icon: "🚚",
    title: "Free & Fast Delivery",
    description: "Get your products delivered quickly and safely to your doorstep."
  },
  {
    icon: "💵",
    title: "Cash on Delivery Available",
    description: "Pay easily at the time of delivery with no upfront payment required."
  },
  {
    icon: "🔄",
    title: "Hassle-Free Returns",
    description: "Not satisfied? Enjoy a smooth and easy return process."
  },
  {
    icon: "📞",
    title: "24/7 Customer Support",
    description: "Our support team is always here to help you anytime."
  }
];

const brands=["Apple","Samsung","Sony","OnePlus","Dell"]



  const handlecategory=async(category)=>{
     dispatch(setCategory(category))
     dispatch(setBrand(""))
     console.log(category)
     navigate('/allproducts')
  }


  const handlebrandfilter=async(brand)=>{
    console.log(brand)

    dispatch(setBrand(brand))
     dispatch(setCategory(""))
   navigate('/allproducts')
  }

 
 const handlecart=async(productId)=>{
    try{
         const res=await dispatch(addtocartthunk(productId)).unwrap()
         toast.success(res.message)
    }

    catch(err){
      toast.error(err)
    }
 }


  return (
    <>
    
    <div className={`${styles.homecontainer}`}>
        
         <div
      
      id="carouselExampleSlidesOnly"
      className={`carousel slide `}
    >
      <div className="carousel-inner" style={{ maxHeight: "400px", padding: "5px",borderRadius:"25px" }}>

        <div className="carousel-item active">
          <img
            src="/bannerimg/banner1.jpeg"
            className="d-block w-100"
            alt="slide1"
            style={{
              objectFit: "cover",
              borderRadius: "25px",
              maxHeight: "400px"
            }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="/bannerimg/banner2.jpeg"
            className="d-block w-100"
            alt="slide2"
            style={{
              objectFit: "cover",
              borderRadius: "25px",
              maxHeight: "400px"
            }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="/bannerimg/banner3.jpeg"
            className="d-block w-100"
            alt="slide3"
            style={{
              objectFit: "cover",
              borderRadius: "25px",
              maxHeight: "400px"
            }}
          />
        </div>

      </div>




    </div>


<div className="overflow-hidden  py-2">
  <div className={styles.movingtext}>
    🔥 Big Sale Today! Free Delivery on Orders Above ₹499 🔥
  </div>
</div>

<div className={`${styles.productcategory}`}>

{
  Array.isArray(productcategory)&&productcategory.length>0 ?(
    productcategory.map((data,index)=>(
       <div className={`${styles.categorycont}`}
            onClick={()=>handlecategory(data.value)}
            key={index}>
          
          
          <img  src={data.imgurl}
                className={`  ${styles.productcategoryimg}`} />
          {/* <p className={`${styles.categoryname}`}>{data.name}</p>  */}
         
     </div>
    ))
  ):
  (<h2>No category found</h2>)
}

    

</div>



  <div className={`mt-5 ps-2 pe-2 ${styles.newproductsection}`}>
     <h1 className={styles.newarrivalheading}>New Arrivals</h1>
      <p className="p-0 m-0 text-muted ">Fresh drops from brands we love. Updated every week.</p>

 <div className={styles.newproductcontainer}>


   {
    Allfilterddata.length>0 ?
    (
      Allfilterddata.map((data)=>(
        <div className={styles.newprocard}>
          <p className={styles.newarrivalcategory}>{data.subcategory}</p>
         
          <img src={data.imgurl}
               alt=""
               className={styles.newproimg}
               loading="lazy" />
          
          <h3 className="p-0 m-0 mt-2 fw-bold"
               style={{fontSize:"20px",color:"black"}}>{data.name}</h3>
      
         <div className="d-flex gap-2 mt-2">
          <p className="  text-muted text-decoration-line-through">₹ {data.price}</p>
           <p className=" fw-bold">₹ {data.discountprice}</p>
         </div>
         
          
          <button className="btn bg-primary text-light"
                  onClick={()=>handlecart(data._id)}> Add to cart</button>

        </div>
      ))
    )

    :(<h2>No New Arival</h2>)
   }
      
       </div>
  </div>


  <div className={`${styles.trendingprodsection}`}>
      <h1 className={`text-center mt-5 ${styles.trendprodheading}`}>Trending Products</h1>
      <p className="p-0 m-0 mt-2 text-muted text-center">Discover the most popular electronics customers are loving right now.</p>


      <div className={styles.trendingprodcont}>
           {
            trendingproducts.length>0?
            
            trendingproducts.map((data)=>(
              <div className={styles.trendingprodcard}>
                <p className={data.discountedpercentage?styles.trendproddiscountper:""}>



                  {data.discountedpercentage?
                  
                  data.discountedpercentage +"% off"
                  
                  :""}
                  </p>
                
                
                 <img src={data?.imgurl} 
                      alt="trending porduct img"
                      className={styles.trendprodimg}
                      loading="lazy"/>
                  
                   <h3 className="p-0 m-0 mt-2 fw-bold"
                        style={{fontSize:"20px",color:"black"}}>{data.name}</h3>
                  
                   {/* <p className="p-0 m-0">{data.brand}</p> */}
                   <div className="d-flex gap-2 mt-2">
                    
                    <p className="text-muted text-decoration-line-through "> ₹{data.price}</p>
                    <p className="fw-bold"> ₹ {data.discountprice}</p>
                   </div>

                   <button className="btn btn-outline-danger"
                  
               
                   onClick={()=>navigate(`/product/${data?._id}`)}>view Product</button>
              </div>
            ))
            
            :(<h2>No trending product yet</h2>)
           }
      </div>
  </div>





  
  <div className={`${styles.bestsellersec}`}>
      <h1 className={`text-center mt-5 ${styles.bestsellercheading}`}>🏆🏆 Best Sellers</h1>
      <p className="p-0 m-0 mt-2 text-muted text-center">Our top-performing products based on real customer purchases.</p>


      <div className={styles.bestsellerprodcont}>
           {
            mostsold.length>0?
            
            mostsold.map((data)=>(
              <div className={styles.trendingprodcard}>
                
                 <img src={data?.imgurl} 
                      alt="trending porduct img"
                      className={styles.trendprodimg}
                      loading="lazy"/>
                  
                   <h3 className="p-0 m-0 mt-2 fw-bold"
                        style={{fontSize:"20px",color:"black"}}>{data.name}</h3>
                  
                   {/* <p className="p-0 m-0">{data.brand}</p> */}
                   <div className="d-flex gap-2 mt-2">
                    
                    <p className="text-muted text-decoration-line-through "> ₹{data.price}</p>
                    <p className="fw-bold"> ₹ {data.discountprice}</p>
                   </div>

                   <button className="btn btn-outline-warning"
                    onClick={()=>handlecart(data._id)}>Add to cart</button>
              </div>
            ))
            
            :(<h2>No most sold product yet</h2>)
           }
      </div>
  </div>



  <div className={`ps-2 pe-2 ${styles.choosesection}`}>
       <h1 className={`text-start mt-5 ${styles.chooseusheading}`}> Why Choose Us ?</h1>


       <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center"}}>
        {
          custservice.map((data)=>(
                <div className={styles.deliverycont}>
                  <div className="row w-100"
                        style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div className="col-4  ">
                      <div className={styles.serviceicon}>{data.icon}</div>

                    </div>


                    <div className="col-8">
                         <h5 className={styles.serviceheading}>{data.title}</h5>
            <p className={styles.servicesubhead}>{data.description}</p>
                    </div>
                  </div>
            
         
              </div>
          ))
        }
         

        

          {/* <div>Cash on</div>
          <div>Easy Returns</div>
          <div>24/7 Support</div> */}
       </div>
  </div>



  <div className={`  ps-2 pe-2${styles.brandfiltersection}`}>
        <h1 className={`text-center mt-5 ${styles.shopbrandheading}`}> Shop By Brands</h1>
      
      
        <div className={styles.brandfiltercont}>
          {
            brands.map((data)=>(  
                          
            <div className={styles.brandcont}
                 onClick={()=>handlebrandfilter(data)} >{data}</div>
            ))
          }
             
        </div>
  </div>



  <Footer/>
    </div>
      



    </>
  
  );
}

export default Home;
