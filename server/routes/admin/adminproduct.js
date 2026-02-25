import {Router} from 'express'
import { roleAuthorization } from '../../Middleware/roleAuthorization.js';
import { userAuthMiddleware } from '../../Middleware/userAuthMiddleware.js';

import { getadminproducts } from '../../controllers/admin/products/getadminproducts.js';
export const adminproductroute=Router();

// userAuthMiddleware,roleAuthorization,

adminproductroute.get('/getalladminproduct',userAuthMiddleware,roleAuthorization,getadminproducts)