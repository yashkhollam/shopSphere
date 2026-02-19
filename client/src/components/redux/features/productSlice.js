import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// export const getallprodthunk=createAsyncThunk('/product/getall',async(_,{rejectWithValue})=>{

//     try{
//          const res=await axios.get(`${import.meta.env.VITE_API_URL}/product/getallproducts`)
//     return res.data
//     }
   
//     catch(err){
//         return rejectWithValue(err.response?.data?.meassage || "Something went wrong")
//     }
   
// })



export const getallprodthunk=createAsyncThunk(`/product/getfilterall`,async({searchtext,category},{rejectWithValue})=>{

    try{
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/product/getallproducts?search=${searchtext}&category=${category}`,{withCredentials:true})
    return res.data
    }
   
    catch(err){
        return rejectWithValue(err.response?.data?.message || "Something went wrong")
    }
   
})


export const getprodbyIdthunk=createAsyncThunk('/product/getprodbyId',async(id,{rejectWithValue})=>{

    try{
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/products/getallprodbyId/${id}`)
    return res.data
    }
   
    catch(err){
        return rejectWithValue(err.response?.data?.meassage || "Something went wrong")
    }
   
})



export const uploadprodthunk=createAsyncThunk('/product/uploadprodthunk',async(formdata,{rejectWithValue})=>{

    try{
         const res=await axios.post(`${import.meta.env.VITE_API_URL}/product/uploadproduct`,formdata,{withCredentials:true})
    return res.data
    }
   
    catch(err){
       return rejectWithValue(err.response?.data?.message)
    }
   
})


export const updateproductthunk=createAsyncThunk('/product/updateproductthunk',async(formdata,{rejectWithValue})=>{

    try{
         const res=await axios.patch(`${import.meta.env.VITE_API_URL}/products/updateproduct/${formdata._id}`,formdata,{withCredentials:true})
    return res.data
    }
   
    catch(err){
       return rejectWithValue(err.response?.data?.meassage || "Something went wrong")
    }
   
})





export const deleteprodthunk=createAsyncThunk('/product/deleteprodthunk',async(id,{rejectWithValue})=>{

    try{
         const res=await axios.delete(`${import.meta.env.VITE_API_URL}/product/deleteproduct/${id}`,{},{withCredentials:true})
    return res.data
    }
   
    catch(err){
       return rejectWithValue(err.response?.data?.meassage || "Something went wrong")
    }
   
})



const ProductSlice=createSlice({
    name:"productoperation",
    initialState:{
        Allproducts:[],
        searchtext:"",
        category:"",
        product:null,
        error:null,
        loading:{
            getallprodloading:null,
            getprodbyIDloading:null,
           addprodloading:null,
           deleteprodloading:null,
           updateprodloading:null,
           
        }
    },

    reducers:{
        setSearchtext:(state,action)=>{
            state.searchtext=action.payload 
        },

        setCategory:(state,action)=>{
            state.category=action.payload
        }
    }
        
    
,
    extraReducers:(builder)=>{
         builder
         //getallproducts
         .addCase(getallprodthunk.pending,(state,)=>{
             state.loading.getallprodloading=true;
             state.error=false;
         })
         .addCase(getallprodthunk.fulfilled,(state,action)=>{
            state.Allproducts=action.payload.data;
           state.loading.getallprodloading=false;
            state.error=false;
         })
         .addCase(getallprodthunk.rejected,(state,action)=>{
              state.loading.getallprodloading=true;
             state.error=action.payload;
         })

          //getproductById
         .addCase(getprodbyIdthunk.pending,(state,action)=>{
             state.loading.getprodbyIDloading=true;
             state.error=false;
         })
         .addCase(getprodbyIdthunk.fulfilled,(state,action)=>{
            state.product=action.payload.data;
            state.loading.getprodbyIDloading=false;
            state.error=false;
         })
         .addCase(getprodbyIdthunk.rejected,(state,action)=>{
             state.loading.getprodbyIDloading=false;
             state.error=action.payload;
         })


          //uploadproducts
         .addCase(uploadprodthunk.pending,(state,action)=>{
             state.loading.addprodloading=true;
             state.error=false;
         })
         .addCase(uploadprodthunk.fulfilled,(state)=>{
           state.loading.addprodloading=false;
            state.error=false;
         })
         .addCase(uploadprodthunk.rejected,(state,action)=>{
              state.loading.addprodloading=false;
             state.error=action.payload;
         })

          //updateproduct
         .addCase(updateproductthunk.pending,(state,action)=>{
             state.loading.updateprodloading=true;
             state.error=false;
         })
         .addCase(updateproductthunk.fulfilled,(state,action)=>{
            const updatedproduct=action.payload.data;

            if(updatedproduct){
                state.Allproducts=state.Allproducts.map((p)=>p._id===updatedproduct._id ? updatedproduct:p)
            }
           state.loading.updateprodloading=false;
            state.error=false;
         })
         .addCase(updateproductthunk.rejected,(state,action)=>{
             state.loading.updateprodloading=false;
             state.error=action.payload;
         })

          //deleteproduct
         .addCase(deleteprodthunk.pending,(state)=>{
             state.loading.deleteprodloading=true;
             state.error=false;
         })
         .addCase(deleteprodthunk.fulfilled,(state,action)=>{
            const deletedproduct=action.payload.data;
            if(deletedproduct){
               state.Allproducts=state.Allproducts.filter((p)=>p._id!==deletedproduct._id)
            }
          
           state.loading.deleteprodloading=false;
            state.error=false;
         })
         .addCase(deleteprodthunk.rejected,(state,action)=>{
              state.loading.deleteprodloading=false;
             state.error=action.payload;
         })
         
    }
})


export const {setSearchtext,setCategory}=ProductSlice.actions
export default ProductSlice.reducer