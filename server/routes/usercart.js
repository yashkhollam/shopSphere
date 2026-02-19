import {Router} from 'express'
import { addtoCart } from '../controllers/admin/cart/addtocart.js';

export const usercartrouter=Router();

usercartrouter.post('/addtocart/:productId',addtoCart)