import React, { useEffect } from "react";
import { Carousel } from "bootstrap";
import styles from '../css/home.module.css'
import { useDispatch } from "react-redux";
import { setCategory } from "../components/redux/features/productSlice";
import {useNavigate} from 'react-router-dom'

function Home() {
 
const dispatch=useDispatch()
const navigate=useNavigate()


  useEffect(() => {
    const element = document.querySelector('#carouselExampleSlidesOnly');

    if (element) {
      new Carousel(element, {
        interval:3000,
        touch: true,
        ride: "carousel"
      });
    }
  }, []);



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
     navigate('/products')
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


<div className="overflow-hidden bg-dark text-white py-2">
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
                className={`${styles.productcategoryimg}`} />
          <p>{data.name}</p> 
          <p className="d-none" ></p>
     </div>
    ))
  ):
  (<h2>No category found</h2>)
}

    

</div>


    </div>
      




    </>
  
  );
}

export default Home;
