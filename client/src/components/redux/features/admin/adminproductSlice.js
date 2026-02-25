import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// export const getAllfilterddata=createAsyncThunk('/product/getall',async(_,{rejectWithValue})=>{

//     try{
//          const res=await axios.get(`${import.meta.env.VITE_API_URL}/product/getAllfilterddata`)
//     return res.data
//     }
   
//     catch(err){
//         return rejectWithValue(err.response?.data?.meassage || "Something went wrong")
//     }
   
// })



export const getadminproductsthunk=createAsyncThunk(`/product/getadminproductsthunk`,async({category,limit,page},{rejectWithValue})=>{

    try{
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/admin/product/getalladminproduct`,
        {params:{
        
         category,
         limit,
         page  
        },withCredentials:true})
    return res.data
    }
   
    catch(err){
        return rejectWithValue(err.response?.data?.message || "Something went wrong")
    }
   
})


export const getprodbyIdthunk=createAsyncThunk('/product/getprodbyId',async(productId,{rejectWithValue})=>{

    try{
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/product/${productId}`)
         console.log("from thun=",productId)
         
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



const adminProductSlice=createSlice({
    name:"adminproductoperation",
    initialState:{
        products:[],
        product:null,
        totalProducts:null,
        
        category:"",
        page:1,
        limit:10,
        totalPages:0,
        
        error:null,
        loading:{
            getadminproloading:false,
            getprodbyIDloading:false,
           addprodloading:false,
           deleteprodloading:false,
           updateprodloading:false,
           
        }
    },

    reducers:{
        // setSearchtext:(state,action)=>{
        //     state.search=action.payload
        //     state.page=1;
            
        // },

        setCategory:(state,action)=>{
            state.category=action.payload
            state.page=1
        },
        setNextPage:(state)=>{
            if(state.page<state.totalPages){
             state.page+=1;
            }
            
        },
        setPrevPage:(state)=>{
            if(state.page>1){
               state.page-=1;
            }
        
        }
    }
        
    
,
    extraReducers:(builder)=>{
         builder
         //getAllfilterddata
         .addCase(getadminproductsthunk.pending,(state,)=>{
             state.loading.getadminproloading=true;
             state.error=false;
         })
         .addCase(getadminproductsthunk.fulfilled,(state,action)=>{
            state.products=action.payload.data;
            state.totalPages=action.payload.totalpages;
            state.totalProducts=action.payload.totalproducts;
            state.page=action.payload.currentpage
          
           state.loading.getadminproloading=false;
            state.error=false;
         })
         .addCase(getadminproductsthunk.rejected,(state,action)=>{
              state.loading.getadminproloading=false;
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
                state.Allfilterddata=state.Allfilterddata.map((p)=>p._id===updatedproduct._id ? updatedproduct:p)
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
               state.Allfilterddata=state.Allfilterddata.filter((p)=>p._id!==deletedproduct._id)
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


export const {setSearchtext,setCategory,setNextPage,setPrevPage}=adminProductSlice.actions
export default adminProductSlice.reducer