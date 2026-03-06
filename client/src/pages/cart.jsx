import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getallcartitemsthunk, increasecartitemqtythunk,decreasecartitemqtythunk, removecartitemthunk } from '../components/redux/features/cartSlice'



import {MinusIcon,PlusIcon,Deleteicon} from '../library/icons.jsx'

import styles from '../css/cart.module.css';
import Loader from '../components/loader.jsx'
import { useNavigate } from 'react-router-dom'

const Cart=()=>{
const navigate=useNavigate()
  const dispatch=useDispatch()
  const {cart,carttotalprice,carttotaldiscountprice,loading}=useSelector((state)=>state.cartopeartion)

// ,increasecartitemqtyloading,getallcartitemloading,

useEffect(()=>{
  dispatch(getallcartitemsthunk())
  
},[dispatch])


  return (
    <>
    {
      loading.getallcartitemloading && <Loader/>
    }
      <div className={`container-fluid  ${styles.cartcont}`} >

          <div className={`row  ${styles.cartcontrow}`} >
                <div className={`col-12 col-md-8 ${styles.cardwrapper}`}>
                 
              {
                Array.isArray(cart)&&cart.length>0 ?
                (cart.map((data,index)=>(
                    <div className={`${styles.cartcard}`} key={index}>

                      <div className="row h-100">
                  
                   <div>
                            <p className={styles.discountper}>{data.discountedpercentage}% off</p>
                      </div>
                      
                     <div className={`col-3  ${styles.prodimgcont}`}>
                      <img src={data.productimg}
                       alt=""
                       className={`${styles.cartimg}`}
                         />
                   </div>
                   
                  <div className={`col-8  ${styles.prodinfocont}`}>
                    <span className='d-flex gap-2 '>
                          <p className={`p-0 m-0  ${styles.prodname}`}>{data.prodname}</p>

                    {/* <p className={` ${styles.prodbrand}`}>{data.prodbrand}</p> */}
                    </span>
                   
                  
                  <p className={`${styles.stocks}`}>{data.prodstocks} in stock</p>
                  {/* <p className={`${styles.proddescription}`}>{`${data.proddescription}......`}</p> */}
                  
                  
                
                  
                <span className='d-flex gap-3 mt-2'>
                  <p className={`text-muted text-decoration-line-through ${styles.prodtotalprice}`}>{data.prodtotalprice}</p>

                  <p className={`${styles.prodtotaldiscprice}`}>₹ {data.prototaldiscprice}</p>
                </span>
                 
                 
                 <div className={`${styles.qtycont}`}>

                {

                 
                  data.quantity===1 ?
                   <Deleteicon className={`text-danger ${styles.minusicon}`} onClick={()=>dispatch(removecartitemthunk(data.prodId))}/>:
                   
                   
                   
                   <MinusIcon className={`${styles.minusicon}`}
                              onClick={()=>dispatch(decreasecartitemqtythunk(data.prodId))}/>

}


                 
                
                 <p className={`${styles.quantity}`}>{data.quantity}</p>
                
                <PlusIcon className={`${styles.plusicon}`} onClick={()=>dispatch(increasecartitemqtythunk(data.prodId))}/>
                 </div>
                 
                 
                 
                 
                  </div>
                  



                      </div>
                   
                  


                    </div>
                )))
                
                
                
                
                :(<h1>empty cart</h1>)
             } 
             </div>

           <div className={`col-12 col-md-4  ${styles.totalpricecont}`}>
                  <h5 className=''>Price details</h5>

                  <div className={`${styles.totalpricewrapper}`}>
                     <span className={`${styles.pricerow}`}>
                      <p>items</p>
                      <p>{cart.length}</p>
                      </span> 

                       <span className={`${styles.pricerow}`}>
                      <p>Delivery charges</p>
                      <p className='text-muted text-decoration-line-through '> ₹ 0</p>
                      </span> 


                       {/* <span className={`${styles.pricerow}`}>
                      <p>Discount applied</p>
                      <p>₹ {""}</p>
                      </span>  */}

                    

                      <span className={`${styles.pricerow}`}>
                      <p>total</p>
                      <p className='text-muted '>₹ {carttotalprice}</p>
                      </span>

                       <span className={`${styles.pricerow}`}>
                      <p>After Discount</p>
                      <p>₹ {carttotaldiscountprice}</p>
                      </span>



                      <div className={styles.ordertotalcont}>
   <span>Final Bill</span>
   <span>₹ {carttotaldiscountprice}</span>
</div>

<button className='btn bg-warning   w-100 mt-2 fw-bold'
onClick={()=>navigate('/addaddress')}>Checkout</button>
                     


                  </div>
             </div>


          </div>
            

            
      </div>
    
    </>
  )
}

export default Cart

