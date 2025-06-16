import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets } from '../assets/assets'


const Order = ({ token }) => {

  const [ordersData, setOrdersData] = useState([]);
  

  const fetchOrders = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + '/api/order/allorders', {}, { headers: { token } })
      console.log(response.data.orders)
      if (response.data.success) {
        setOrdersData(response.data.orders.reverse())

      }
      else {
        toast.error(response.data.message)
      }



    } catch (error) {
      console.log(error)
      toast.error(error.message)


    }

  }

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', { orderId, status: e.target.value }, { headers: { token } })
      if (response.data.success) {
        await fetchOrders();

      }


    } catch (error) {

      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(() => {
    fetchOrders()
  }, [token])
  return (
    <div className='my-5 mx-8 sm:mx-15'>
      <h1 className='text-xl font-bold mb-6'>Orders</h1>
      {ordersData.length === 0 ? <p>No orders have been placed</p> :
        <div>
          {
            ordersData.map((order, index) => (
              <div key={index} className='mb-7 flex flex-col sm:flex-row gap-2 border-gray-300 p-2 border-1 items-start'>
                <img className='w-12' src={order?.items[0]?.image[0]} alt="" />
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-[3fr_1fr_1fr_1fr]'>
                  <div>
                    {
                      order.items.map((item, index) => (
                        <div key={index} className='flex items-center text-gray-700'>
                          <p className='text-[10px] sm:text-xs md:text-sm mr-2'>{item?.name}</p>
                          <p className='text-[10px] sm:text-xs '>{item?.quantity} x {item?.size}</p>
                        </div>
                      ))

                    }
                    <p className='text-md mt-3'>{order?.address?.firstName}</p>
                    <div className='flex gap-1 text-[10px] sm:text-xs text-gray-500'>
                      <p className='text-md mb-2'>{order?.address?.street},</p>
                      <p className='text-md mb-2'>{order?.address?.city},</p>
                      <p className='text-md mb-2'>{order?.address?.province},</p>
                      <p className='text-md mb-2'>{order?.address?.country},</p>
                      <p className='text-md mb-2'>{order?.address?.zipCode}</p>
                    </div>
                    <p className='text-xs text-gray-500'>{order?.address?.phoneNum}</p>
                    <p className='text-xs text-gray-500'>{order?.address?.email}</p>
                  </div>
                  <div className='text-[10px] sm:text-[11px] flex flex-col gap-0.5'>
                    <p>Items :{order?.items.length}</p>
                    <p>Method :{order?.paymentMethod}</p>
                    <p>Payment :{order?.payment ? 'Done' : 'Pending'}</p>
                    <p>Date :{new Date(order?.date).toDateString()}</p>
                  </div>
                  <div className='sm:text-center text-sm'>{currency}{order?.amount}</div>
                  <div>
                    <select onChange={(event)=>statusHandler(event,order._id)} value={order?.status} className='bg-gray-500 text-xs p-1 rounded text-white' >
                      <option value="Order placed">Order placed</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out for delivery">Out for delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Order
