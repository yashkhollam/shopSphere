import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getallorderthunk } from '../components/redux/features/orderSlice';
import style from '../css/userorder.module.css'


const UserAllOrders=()=>{

const dispatch=useDispatch()

const [openOrderId,setOpenorderId]=useState(null)

const {userOrders}=useSelector((state)=>state.productOrders)


useEffect(()=>{
  dispatch(getallorderthunk())
},[dispatch])



const getStatusColor=(status)=>{
  if(status==="pending"){
    return "text-secondary"
  }
  else if (status==="processing"){
       return "text-warning"
  }

  else if (status==="shipped"){
        return "text-warning"
  }

  else if (status==="delivered"){
     return "text-success"
  }

  else if(status==="cancelled"){
      return "text-danger"
  }
}

  return (
    <div className={`container-fluid ${style.userordercontainer} `}
         >


        {
            userOrders?.length>0 ?(
                userOrders.map((data)=>(
                      <div className={` p-2 ${style.ordercard}`}>
                        <div className='d-flex justify-content-between '>
                        <p className={`p-0 m-0 `}>{"12 Feb 2026"}</p>
                        <p className={`p-0 m-0 ${getStatusColor(data.orderStatus)}`}>{data.orderStatus}</p>
                        
                        </div>
                        

                        <div className='d-flex gap-2 mt-1'>
                          <p className='p-0 m-0 text-muted'>payment :</p>
                           <p className='p-0 m-0'>{data.paymentStatus}</p>
                        
                        </div>

                        <div className='d-flex gap-2 mt-1'>
                            <p className='p-0 m-0 text-muted'>Total :</p>
                            <p className='p-0 m-0'>₹ {data.totalAmount}</p>
                        </div>
                       
                      <div className='d-flex justify-content-between mt-1'>
                       <h5 className='text-primary'>Items :</h5>
                       <p onClick={()=>setOpenorderId(data._id===openOrderId?null:data._id)}>

                        {data._id===openOrderId?"close":"show"}
                        </p>
                      </div>
                        

                        {
                           data?.items?.length>0? (data.items.map((order)=>(
                              openOrderId===data._id &&
                                <div className={`${style.orderitemcontainer}`}>
                                  <div className="row w-100">
                                    <div className="col-3">
                                      <img src={order.prodimage} alt="product"
                                      loading="lazy"
                                    className={`${style.prodimage}`}
                                    />  
                                    </div>

                                    <div className="col-8">
                                       <h5 className='p-0 m-0'>{order.productName}</h5>

                                    <div className='d-flex gap-2 mt-1'>
                                       <p className='p-0 m-0 text-muted'>price :</p>
                                        <p className='p-0 m-0 fw-bold'>₹ {order.price}</p>
                                    </div>
                                   
                                   <div className='d-flex gap-1 mt-1'
                                       style={{fontSize:"15px"}}>
                                      <p className='p-0 m-0 text-muted'>qty :</p>
                                       <p className='p-0 m-0'>{order.quantity}</p>
                                   </div>
                                   
                                    </div>
                                  </div>
                                    

                                    
                                </div>
                            ))):(<h1>no items</h1>)
                        }

                      </div>
                ))
            ):(<h1>no order yet</h1>)
        }


        


          </div>
  )
}

export default UserAllOrders
