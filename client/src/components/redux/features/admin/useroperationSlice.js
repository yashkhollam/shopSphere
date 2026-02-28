
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const getlluserthunk=createAsyncThunk('/getllusers',async(_,{rejectWithValue})=>{

    try{
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/admin/users/getalluser`,{withCredentials:true})
         console.log(res.data)
         return res.data
    }

    catch(err){
        return rejectWithValue(err?.response?.data?.message)
    }
     
})


export const updateuserStatusthunk=createAsyncThunk('/updateuserStatus',async({id,isActive},{rejectWithValue})=>{
    
  try{
      const res=await axios.patch(`${import.meta.env.VITE_API_URL}/admin/users/updateuserstatus/${id}`,{isActive},{withCredentials:true})
   
  
      return res.data
  }
  catch(err){
    
    return rejectWithValue(err?.response?.data?.message)
  }
})



 const useroperationSlice=createSlice({
    name:"useroperation",
    initialState:{
       allusers:[],
       user:null,
       error:null,
        loading:{
         getalluserloading:false,
         getuserloading:false,
         deleteuser:false,
         userstatusloading:false

        }
    },
  extraReducers:(builder)=>{
       builder

       .addCase(getlluserthunk.pending,(state)=>{
        state.loading.getalluserloading=true;
        state.error=null;
       }) 
       .addCase(getlluserthunk.fulfilled,(state,action)=>{
         state.loading.getalluserloading=false;
         state.allusers=action.payload.data;
         state.error=null;
       })
      
     .addCase(getlluserthunk.rejected,(state,action)=>{
           state.loading.getalluserloading=false;
           state.error=action.payload

     })

     .addCase(updateuserStatusthunk.pending,(state)=>{
        state.loading.userstatusloading=true;
        state.error=null;
       }) 
       .addCase(updateuserStatusthunk.fulfilled,(state,action)=>{
      
        const {id,isActive}=action.payload.data;
         
                 state.allusers=state.allusers.map((user)=>user._id===id
                 ? {...user, isActive} 
                 : user)
           
              


            state.loading.userstatusloading=false;
         state.error=null;
       })
      
     .addCase(updateuserStatusthunk.rejected,(state,action)=>{
           state.loading.userstatusloading=false;
           state.error=action.payload

     })




  }

})


export default useroperationSlice.reducer

