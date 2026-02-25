import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getadminproductsthunk, setCategory, setNextPage ,setPrevPage} from '../../components/redux/features/admin/adminproductSlice.js';
import Loader from '../../components/loader.jsx'


function Adminviewallproduct() {
const [selectcategory,setSelectCategory]=useState("all")
  const dispatch=useDispatch()
        
  const {products,limit,category,page,totalPages,loading}=useSelector((state)=>state.adminproductoperation)

useEffect(()=>{
    dispatch(getadminproductsthunk({category,page,limit}))
   
},[category,limit,page,])




  return (
    <>
        {
          loading.getadminproloading&& <Loader/>
        }
      <div className="container-fluid ">
      
      <div className='p-4'>
        <select name="" 
                // value={selectcategory}
                id=""
                className='form-select'
                onChange={(e)=>dispatch(setCategory(e.target.value))}>
          <option value="" disabled selected>Filter by category</option>
         <option value="MobilesTablets">Mobile & Tablet </option>
          <option value="LaptopsComputers">Laptop & Computer</option>
           <option value="AudioDevices">Audio Devices</option>
            <option value="SmartGadgets">Smart Gadgets</option>
            <option value="Gamings">Gamings</option>
        </select>
      </div>

         <table className='table table-bordered text-center table-responsive'>
            <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Stocks</th>
                  <th colSpan={2}>
                   Actions
                  </th>
                </tr>
            </thead>

            <tbody>

              
              {
                products?.length>0 && products.map((data,index)=>(
                  <tr key={index}>
                   <td>
                    <img src={data?.imgurl}
                         alt="product image"
                         style={{height:"50px",width:"100%",objectFit:"contain"}} />
                   </td>
                    <td style={{verticalAlign:"middle"}}>{data?.name}</td>
                    <td style={{verticalAlign:"middle"}}>{data?.discountprice}</td>
                    <td style={{verticalAlign:"middle"}}>{data?.subcategory}</td>
                    <td style={{verticalAlign:"middle"}}>{data?.stocks}</td>
                    <td style={{verticalAlign:"middle"}}>
                      <button className='btn bg-warning'>edit</button>
                    </td>
                    <td style={{verticalAlign:"middle"}}> <button className='btn bg-danger text-light'>delete</button></td>
                 </tr>
                ))
              }
              
            </tbody>
         </table>
       
         <div className='d-flex'>
          <button className='btn bg-success text-light'
                  onClick={()=>dispatch(setPrevPage())}>
           
           
            prev
            
            </button>
          
           <h5>{page}/{totalPages}</h5>
          
          <button className='btn bg-danger text-light'
                  onClick={()=>dispatch(setNextPage())}>next</button>
         </div>
      </div>
    </>
  )
}

export default Adminviewallproduct