import {Router} from 'express';
import { userAuthMiddleware } from '../../Middleware/userAuthMiddleware.js';
import { roleAuthorization } from '../../Middleware/roleAuthorization.js';
import { createOrder } from '../../controllers/admin/order/createOrder.js';
import { getuserOrderdata } from '../../controllers/admin/order/getuserorderdata.js';
import { getAllorders } from '../../controllers/admin/order/getallorders.js';
import { updateorderstatus } from '../../controllers/admin/order/updateorderstatus.js';

export const orderroute=Router()



orderroute.post('/createorder',userAuthMiddleware,createOrder)
orderroute.get('/getorderdata',userAuthMiddleware,getuserOrderdata)


orderroute.get('/getallorderdata',userAuthMiddleware,roleAuthorization,getAllorders)
orderroute.patch('/updateorderstatus/:id',userAuthMiddleware,roleAuthorization,updateorderstatus)