import React, { useEffect } from "react";
import { Carousel } from "bootstrap";
import styles from '../css/home.module.css'
import { useDispatch ,useSelector} from "react-redux";
import { getAllfilterddata, getMostsoldproduct, getTrendingproduct, setCategory } from "../components/redux/features/productSlice";
import {useNavigate} from 'react-router-dom'


function Home() {
 
const dispatch=useDispatch()
const navigate=useNavigate()

const {Allfilterddata,trendingproducts,mostsold}=useSelector((state)=>state.productoperation)








  useEffect(() => {
  dispatch(getAllfilterddata({limit:8}))
  dispatch(getTrendingproduct({limit:4,isTrending:true}))
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
    {name:"Audio devices",imgurl:"/product/camers.webp",value:"AudioDevices"},
    {name:"smart Gadgets",imgurl:"/product/watch.png",value:"SmartGadgets"},
    {name:"Gaming",imgurl:"/product/games.png",value:"Gamings"},
  ]


  const handlecategory=async(category)=>{
     dispatch(setCategory(category))
     console.log(category)
     navigate('/allproducts')
  }
  return (
    <>
    <div className={`${styles.homecontainer}`}>
        
         <div
      
      id="carouselExampleSlidesOnly"
      className={`carousel slide `}
    >
      <div className="carousel-inner" style={{ maxHeight: "410px", padding: "5px" }}>

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



  <div className={`mt-5 ${styles.newproductsection}`}>
     <h1 className={styles.productsecheading}>New Arrivals</h1>
      <p className="p-0 m-0 text-muted ">Fresh drops from brands we love. Updated every week.</p>

 <div className={styles.newproductcontainer}>


   {
    Allfilterddata.length>0 ?
    (
      Allfilterddata.map((data)=>(
        <div className={styles.newprocard}>
          <p className="p-1 m-0 mt-2 text-center rounded position-absolute bg-success text-light ">{data.subcategory}</p>
         
          <img src={data.imgurl}
               alt=""
               className={styles.newproimg} />
          
          <h3 className="p-0 m-0 mt-2 fw-bold"
               style={{fontSize:"20px",color:"black"}}>{data.name}</h3>
      
         <div className="d-flex gap-2 mt-2">
          <p className="  text-muted text-decoration-line-through">₹ {data.price}</p>
           <p className=" fw-bold">₹ {data.discountprice}</p>
         </div>
         
          
          <button className="btn   bg-primary text-light">Add to cart</button>

        </div>
      ))
    )

    :(<h2>No New Arival</h2>)
   }
      
       </div>
  </div>


  <div className={`${styles.trendingprodsection}`}>
      <h1 className={`text-center mt-5 ${styles.productsecheading}`}>Trending Products</h1>
      <p className="p-0 m-0 mt-2 text-muted text-center">Discover the most popular electronics customers are loving right now.</p>


      <div className={styles.trendingprodcont}>
           {
            trendingproducts.length>0?
            
            trendingproducts.map((data)=>(
              <div className={styles.trendingprodcard}>
                 <img src={data?.imgurl} 
                      alt="trending porduct img"
                      className={styles.trendprodimg}/>
                  
                   <h3 className="p-0 m-0 mt-2 fw-bold"
                        style={{fontSize:"20px",color:"black"}}>{data.name}</h3>
                  
                   {/* <p className="p-0 m-0">{data.brand}</p> */}
                   <div className="d-flex gap-2 mt-2">
                    
                    <p className="text-muted text-decoration-line-through "> ₹{data.price}</p>
                    <p className="fw-bold"> ₹ {data.discountprice}</p>
                   </div>

                   <button className="btn btn-outline-danger">view Product</button>
              </div>
            ))
            
            :(<h2>No trending product yet</h2>)
           }
      </div>
  </div>





  
  <div className={`${styles.trendingprodsection}`}>
      <h1 className={`text-center mt-5 ${styles.productsecheading}`}>🏆🏆 Best Sellers</h1>
      <p className="p-0 m-0 mt-2 text-muted text-center">Our top-performing products based on real customer purchases.</p>


      <div className={styles.trendingprodcont}>
           {
            mostsold.length>0?
            
            mostsold.map((data)=>(
              <div className={styles.trendingprodcard}>
                 <img src={data?.imgurl} 
                      alt="trending porduct img"
                      className={styles.trendprodimg}/>
                  
                   <h3 className="p-0 m-0 mt-2 fw-bold"
                        style={{fontSize:"20px",color:"black"}}>{data.name}</h3>
                  
                   {/* <p className="p-0 m-0">{data.brand}</p> */}
                   <div className="d-flex gap-2 mt-2">
                    
                    <p className="text-muted text-decoration-line-through "> ₹{data.price}</p>
                    <p className="fw-bold"> ₹ {data.discountprice}</p>
                   </div>

                   <button className="btn btn-outline-warning">Add to cart</button>
              </div>
            ))
            
            :(<h2>No trending product yet</h2>)
           }
      </div>
  </div>
    </div>
      




    </>
  
  );
}

export default Home;
