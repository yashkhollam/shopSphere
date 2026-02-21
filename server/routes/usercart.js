import {Router} from 'express'
import { addtoCart } from '../controllers/cart/addtocart.js';
import { getuserCart } from '../controllers/cart/getusercart.js';
import { increasecartquantity } from '../controllers/cart/increasecartquantity.js';
import { decreasecartquantity } from '../controllers/cart/decreasecartquantity.js';
import { removecartitem } from '../controllers/cart/removecart.js';
import {userAuthMiddleware} from '../Middleware/userAuthMiddleware.js'


export const usercartrouter=Router();

usercartrouter.post('/addtocart/:productId',userAuthMiddleware,addtoCart)
usercartrouter.delete('/removecartitem/:productId',userAuthMiddleware,removecartitem)

usercartrouter.get('/getcartitems',userAuthMiddleware,getuserCart)

usercartrouter.post('/increaseqty/:productId',userAuthMiddleware,increasecartquantity)

usercartrouter.patch('/decreaseqty/:productId',userAuthMiddleware,decreasecartquantity)