import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getallorderthunk, updateorderstatusthunk } from '../../components/redux/features/admin/adminOrderoperationsSlice'
import style from '../../css/allorder.module.css';
import Swal from "sweetalert2";
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'


function Orders() {

const dispatch=useDispatch()
const navigate=useNavigate()
useEffect(()=>{
  dispatch(getallorderthunk())
},[dispatch])


const {allOrders}=useSelector((state)=>state.adminorderoperation)


// Swal.fire({
//   title:"Are you sure ?",
//   text:"You want to update this order status",
//   icon:"warning",
//   showCancelButton:true,
//   confirmButtonText:"Yes, update it !",
// }).then((result)=>{
//   if(result.isConfirmed){
//     dispatch()
//   }
// })

const handleorderstatus=async(id,orderStatus)=>{
 try{

 
 const result=await Swal.fire({
    title:"are you sure ?",
    text:`You want  to update this order status:- ${orderStatus}` ,
    icon:"warning",
    showCancelButton:true,
    confirmButtonText:"Yes, update it"
  }) 
  if(result.isConfirmed){
    const res=await dispatch(updateorderstatusthunk({id,orderStatus})).unwrap()

    toast.success(res.message)
    }

  
  
 
}

catch(err){
  // console.log("from com",err)
  toast.error(err)
}
}


  return (
    <>
    
    <div className={`container-fluid   ${ style.ordercontainers}`}>

      <h2 className='text-center mt-3 mb-3 w-100 bg-primary text-light'>Order Summery</h2>
  
  <div className='table-responsive p-0 m-0 '
    style={{height:"100vh",
             overflowY:"auto"
    }}>
        <table className='table table-bordered text-center table-striped ' style={{verticalAlign:"middle",whiteSpace:"nowrap"}}>
   <thead >
       <tr>
      <th>order ID</th>
       <th>Username</th>
        <th>Total Amt</th>
         <th>Order Status</th>
          <th>Payment Status</th>
           <th>Order Date</th>
            <th>Action</th>

    </tr>
   </thead>

   <tbody >
      {
         allOrders?.length>0?
         
         allOrders.map((order,index)=>(
           <tr key={index}>
            <td>{order.id}</td>
            <td>{order.username}</td>
            <td className='text-decoration-underline'>₹ {order.totalAmount}</td>
            <td>

         <select name="orderStatus" className='form-select' onChange={(e)=>handleorderstatus(order.id,e.target.value)}>
          <option value="cancelled" >{order.orderStatus}</option>

           <option value="pending">pending</option>

            <option value="delivered">delivered</option>

             <option value="cancelled">cancelled</option>
              <option value="shipped">shipped</option>

        
         </select>


            </td>
            <td>{order.paymentStatus}</td>
            <td>{order.createdDate}</td>
             <td><button className='btn btn-sm btn-warning' onClick={()=>navigate(`/orderbyid/${order.id}`)}>view details</button></td>
           </tr>
         ))
         
         
         
         
         :
         
         (<tr><td colSpan={7}>No Order yet</td></tr>)
      }

   </tbody>
    


    </table>
  </div>

    
     
    </div>
    
    
    </>
  )
}

export default Orders