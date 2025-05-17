import express from 'express';
import {placeOrderCOD,placeOrderRazorpay,placeOrderStripe,allOrdersAdmin,userOrders,updateStatus} from '../controllers/orderController.js';


const orderRouter = express.Router();

orderRouter.post('/cod', placeOrderCOD);
orderRouter.post('/stripe', placeOrderStripe);
orderRouter.post('/razorpay', placeOrderRazorpay);
orderRouter.post('/allorders', allOrdersAdmin);
orderRouter.post('/userorders', userOrders);
orderRouter.post('/status', updateStatus);

export default orderRouter;