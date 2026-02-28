import {configureStore} from '@reduxjs/toolkit'
import userAuthSlice from './features/userauthSlice.js'
import ProductSlice from './features/productSlice.js'
import cartSlice from './features/cartSlice.js'
import adminProductSlice from './features/admin/adminproductSlice.js'
import useroperationSlice from './features/admin/useroperationSlice.js';
import productorderSlice from './features/orderSlice.js'
import adminorderoprationSlice from './features//admin/adminOrderoperationsSlice.js'

export const store=configureStore({
  reducer:{
    userAuth:userAuthSlice,
    productoperation:ProductSlice,
    adminproductoperation:adminProductSlice,
    cartopeartion:cartSlice,
    useroperation:useroperationSlice,
    productOrders:productorderSlice,
    adminorderoperation:adminorderoprationSlice

  }  
})