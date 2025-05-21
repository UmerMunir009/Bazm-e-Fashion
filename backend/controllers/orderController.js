import orderModel from './../models/orderModel.js'
import userModel from './../models/userModel.js'


//place order through cash on delivery mathod
const placeOrderCOD = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }
        const order = new orderModel(orderData);
        await order.save()

        await userModel.findByIdAndDelete(userId, { cartData: {} })

        res.json({ success: true, message: "Order placed" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}


//place order through cash on stripe method
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'Stripe',
            payment: false,
            date: Date.now()
        }
        const order = new orderModel(orderData);
        await order.save()

        await userModel.findByIdAndDelete(userId, { cartData: {} })

        res.json({ success: true, message: "Order placed" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}


//place order through cash on razorpay method
const placeOrderRazorpay = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'RazorPay',
            payment: false,
            date: Date.now()
        }
        const order = new orderModel(orderData);
        await order.save()

        await userModel.findByIdAndDelete(userId, { cartData: {} })

        res.json({ success: true, message: "Order placed" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}


//To display all orders in admin panel
const allOrdersAdmin = async (req, res) => {
    try {
        
        const orders = await orderModel.find({ })
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}


//To display specific user orders 
const userOrders = async (req, res) => {

    try {
        const { userId } = req.body
        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })
        
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
        
    }
}


//to update order status only for admin
const updateStatus = async (req, res) => {
    try {
        const {orderId,status}=req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({ success: true, message:"Status Updated" })
        
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
        
    }

}

export { placeOrderCOD, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders, allOrdersAdmin }