import {Router} from 'express'
import { roleAuthorization } from '../../Middleware/roleAuthorization.js';
import { userAuthMiddleware } from '../../Middleware/userAuthMiddleware.js';

import { getadminproducts } from '../../controllers/admin/products/getadminproducts.js';

import { updateproduct } from '../../controllers/admin/products/updateproduct.js';
import { deleteproduct } from '../../controllers/admin/products/deleteproduct.js';
import upload from '../../Middleware/multer.js';


export const adminproductroute=Router();

// userAuthMiddleware,roleAuthorization,

adminproductroute.get('/getalladminproduct',userAuthMiddleware,roleAuthorization,getadminproducts)

adminproductroute.delete('/deleteproduct/:id',deleteproduct)

adminproductroute.patch('/updateproduct/:id',upload.single("image"),updateproduct)