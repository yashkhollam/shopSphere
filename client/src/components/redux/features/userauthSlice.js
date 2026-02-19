
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const cretaeaccthunk=createAsyncThunk('userAuth/createacc',async(formdata,{rejectWithValue})=>{
    try{
          
         const res=await axios.post(`${import.meta.env.VITE_API_URL}/userauth/sendotp`,formdata,{withCredentials:true})


       
   
        return res.data;
    }

    catch(err){
       console.log(err.response.data?.message);
       return rejectWithValue(err.response.data?.message)
    }
})


export const accOTPverifythunk=createAsyncThunk('userAuth/accOTPverifythunk',async(formdata,{rejectWithValue})=>{
   try{
      const res=await axios.post(`${import.meta.env.VITE_API_URL}/userauth/verifyOTP`,formdata,{
        withCredentials:true
      })

      return res.data
   }

   catch(err){
     console.log(err);
     return rejectWithValue(err.response.data?.message)
   }
})

export const loginthunk=createAsyncThunk('userAuth/loginthunk',async(formdata,{rejectWithValue})=>{

    try{
       const res=await axios.post(`${import.meta.env.VITE_API_URL}/userauth/login`,formdata,{withCredentials:true})
    return res.data  
    }

    catch(err){
        console.log(err);
       return rejectWithValue(err.response.data?.message)
    }
    
})

export const logoutthunk=createAsyncThunk('userAuth/logoutthunk',async(_,{rejectWithValue})=>{
   try{
       const res=await axios.post(`${import.meta.env.VITE_API_URL}/userauth/logout`,{},{withCredentials:true})
       return res.data
   }
   catch(err){
          console.log(err);
         return rejectWithValue(err.response.data?.message)
   }
})





export const getMeThunk=createAsyncThunk('userAuth/getMeThunk',async(_,{rejectWithValue})=>{
   try{
       const res=await axios.post(`${import.meta.env.VITE_API_URL}/userauth/getMe`,{},{withCredentials:true})
       return res.data

       
   }
   catch(err){
          console.log(err);
         return rejectWithValue(err.response.data?.message)
   }
})


 const userAuthSlice=createSlice({
    name:"userAuth",
    initialState:{
        isAuthenticated:false,
        isauthChecked:false,
        user:null,
        error:null,
        loading:{
          createaccloading:false,
          accOTPverifyloading:false,
          loginloading:false,
           logoutloading:false,
           getmeloading:false
        }
    },
  extraReducers:(builder)=>{
       builder

       //create account 
       .addCase(cretaeaccthunk.pending,(state)=>{
           state.loading.createaccloading=true;
           state.error=null
       })
       .addCase(cretaeaccthunk.fulfilled,(state)=>{
        state.loading.createaccloading=false;
        state.error=null
       })
       .addCase(cretaeaccthunk.rejected,(state,action)=>{
         state.loading.createaccloading=false;
         state.error=action.payload
       })


    //otp verify
        .addCase(accOTPverifythunk.pending,(state)=>{
           state.loading.accOTPverifyloading=true;
           state.error=null
       })
       .addCase(accOTPverifythunk.fulfilled,(state)=>{
        state.loading.accOTPverifyloading=false;
        state.error=null
       })
       .addCase(accOTPverifythunk.rejected,(state,action)=>{
         state.loading.accOTPverifyloading=false;
         state.error=action.payload
       })

       //login
        .addCase(loginthunk.pending,(state)=>{
           state.loading.loginloading=true;
           state.error=null
       })
       .addCase(loginthunk.fulfilled,(state,action)=>{
         state.user=action.payload.data;
         state.isAuthenticated=true;
        state.loading.loginloading=false;
        state.error=null
       })
       .addCase(loginthunk.rejected,(state,action)=>{
         state.loading.loginloading=false;
         state.error=action.payload
       })
    
       //logout
        .addCase(logoutthunk.pending,(state)=>{
           state.loading.logoutloading=true;
           state.error=null
       })
       .addCase(logoutthunk.fulfilled,(state)=>{
        state.isAuthenticated=false
        state.loading.logoutloading=false;
        state.error=null
       })
       .addCase(logoutthunk.rejected,(state,action)=>{
         state.loading.logoutloading=false;
         state.error=action.payload
       })

      //get me 
        .addCase(getMeThunk.pending,(state)=>{
           state.loading.getmeloading=true;
           state.error=null
       })
       .addCase(getMeThunk.fulfilled,(state,action)=>{
       state.user=action.payload.data
         state.isAuthenticated=true
         state.isauthChecked=true
        state.loading.getmeloading=false;
        state.error=null
       })
       .addCase(getMeThunk.rejected,(state,action)=>{
         state.loading.getmeloading=false;
         state.error=action.payload
         state.isauthChecked=true
       })



  }

})


export default userAuthSlice.reducer

