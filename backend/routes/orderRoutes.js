import express from 'express';
import {placeOrderCOD,placeOrderRazorpay,placeOrderStripe,allOrdersAdmin,userOrders,updateStatus} from '../controllers/orderController.js';
import adminAuth from './../middleware/adminAuth.js'
import authUser from './../middleware/auth.js'

const orderRouter = express.Router();

orderRouter.post('/cod',authUser, placeOrderCOD);
orderRouter.post('/stripe',authUser, placeOrderStripe);
orderRouter.post('/razorpay',authUser, placeOrderRazorpay);
orderRouter.post('/userorders',authUser, userOrders);

//admin features
orderRouter.post('/allorders',adminAuth, allOrdersAdmin);
orderRouter.post('/status',adminAuth, updateStatus);

export default orderRouter;