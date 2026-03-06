import React, { useEffect ,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {getlluserthunk, updateuserStatusthunk} from '../../components/redux/features/admin/useroperationSlice'
import {toast} from 'react-hot-toast'



function Allusers() {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getlluserthunk())
  },[dispatch])

  const {allusers}=useSelector((state)=>state.useroperation)


  const handleuserstatus=async(id,isActive)=>{
    try{
   

    const res=await dispatch(updateuserStatusthunk({id,isActive:!isActive})).unwrap();
    
    toast.success(res.message)
    console.log(isActive)
    }

    catch(err){
      toast.error(err)
    
    }
  }

  // console.log(isActive)

  return (
    <div className="container-fluid "
         style={{marginBottom:"200px"}}>
       <h2 className='text-center fw-bold mt-3 mb-3'>All Users</h2>
      
      <div className='table-responsive '>
          <table className='table text-center table-bordered table-striped '>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Verified</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className=''>
          {
            allusers.length>0 ? (
              allusers.map((data,index)=>(
                <tr className='align-middle' key={index}>
                  <td >{index+1}</td>
                  <td>{data.username}</td>
                   <td>{data.email}</td>
                   <td>{data.role}</td>
                    <td>{data.isverified ? "true":"false"}</td>
                     <td>{data.isActive ? "active" :"block"}</td>
                     <td>

                    {
                      data.isActive ?

                       <button 
                      className='btn bg-danger text-light'
                      onClick={()=>handleuserstatus(data._id,data.isActive)}
                      >block</button>

                      : 
                        <button 
                      className='btn bg-warning text-light'
                      onClick={()=>handleuserstatus(data._id,data.isActive)}
                      >Unblock</button>
                    }
                     
                      
                      </td>
                </tr>
              ))
            ):(
              <tr><td colSpan={6}>No users</td></tr>
            )
          }
        </tbody>

       </table>
      </div>
       
    </div>
  )
}

export default Allusers