import {configureStore} from '@reduxjs/toolkit'
import userAuthSlice from './features/userauthSlice.js'
import ProductSlice from './features/productSlice.js'
import cartSlice from './features/cartSlice.js'
import adminProductSlice from './features/admin/adminproductSlice.js'

export const store=configureStore({
  reducer:{
    userAuth:userAuthSlice,
    productoperation:ProductSlice,
    adminproductoperation:adminProductSlice,
    cartopeartion:cartSlice
  }  
})