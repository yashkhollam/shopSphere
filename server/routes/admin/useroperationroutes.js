import {Router} from 'express'
import { userAuthMiddleware } from '../../Middleware/userAuthMiddleware.js';
import {roleAuthorization} from '../../Middleware/roleAuthorization.js'
import { getallusers } from '../../controllers/admin/useroperations/getallusers.js';
import { userStatus } from '../../controllers/admin/useroperations/userStatus.js';


export const useropeationroutes=Router()



useropeationroutes.get('/getalluser',userAuthMiddleware,roleAuthorization,getallusers)



useropeationroutes.patch(`/updateuserstatus/:id`,userAuthMiddleware,roleAuthorization,userStatus)

