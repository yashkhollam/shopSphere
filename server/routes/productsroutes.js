import {Router} from 'express'
import upload from '../Middleware/multer.js';
import { uploadproduct } from '../controllers/admin/products/addproducts.js';


import {userAuthMiddleware} from '../Middleware/userAuthMiddleware.js';
import { roleAuthorization } from '../Middleware/roleAuthorization.js';
import { productfilter } from '../controllers/admin/products/productfilter.js';
import { getProductById } from '../controllers/admin/products/getProductById.js';




export const productroute=Router();



productroute.post('/uploadproduct',upload.single("image"),userAuthMiddleware,roleAuthorization,uploadproduct)


// productroute.get('/getallproducts',getproducts)
productroute.get('/getAllfilterddata',productfilter)
productroute.get('/:productId',getProductById)


