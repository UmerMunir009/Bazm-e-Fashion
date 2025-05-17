
//place order through cash on delivery mathod
const placeOrderCOD= async(req,res)=>{

}


//place order through cash on stripe method
const placeOrderStripe= async(req,res)=>{

}


//place order through cash on razorpay method
const placeOrderRazorpay= async(req,res)=>{

}


//To display all orders in admin panel
const allOrdersAdmin= async(req,res)=>{

}


//To display specific user orders 
const userOrders= async(req,res)=>{

}


//to update order status only for admin
const updateStatus= async(req,res)=>{

}

export {placeOrderCOD,placeOrderRazorpay,placeOrderStripe,updateStatus,userOrders,allOrdersAdmin}