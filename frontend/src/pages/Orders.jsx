import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


const Orders = () => {
  const { currency, backendUrl, token } = useContext(ShopContext)
  const [orders, setOrders] = useState([]);


  const getUserOrders = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
      console.log(response.data.success)
      if (response.data.success) {
        console.log(response.data)
        let allItems = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            item['payment'] = order.payment
            allItems.push(item)
          })

        })
        setOrders(allItems.reverse())
      }
      else {
        toast.error(response.data.message)
      }



    } catch (error) {
      console.log(error)
      toast.error(error.message)


    }
  }

  useEffect(() => {
    getUserOrders()
  }, [token])

  return (
    <div className='border-t border-gray-300 pt-15'>
      <div className='text-xl mb-5'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {orders.map((item, index) => (
          <div key={index} className='border-b border-gray-300  py-3 flex flex-col sm:flex-row gap-2  sm:justify-between sm:items-center'>
            <div className='flex gap-3'>
              <img className='w-14 md:w-20 rounded' src={item?.image[0]} alt="" />
              <div className='flex flex-col gap-3'>
                <p className='text-sm text-gray-700 text-bold'>{item?.name}</p>
                <div className='flex gap-5 text-xs text-gray-500'>
                  <p>{currency}{item?.price}</p>
                  <p>Quantity : {item?.quantity}</p>
                  <p>Size : {item?.size}</p>
                </div>
                <p className='text-xs text-gray-500'><b>Date:</b> {new Date(item?.date).toDateString()}</p>
                <p className='text-xs text-gray-500'><b>Payment:</b> {item?.paymentMethod}</p>
              </div>
            </div>
            <div className='flex gap-10 items-center '>
              <div className='flex gap-1 items-center pl-4 sm:pl-0'>
                <p className='min-w-3 h-3 rounded-full bg-green-600'></p>
                <p className='text-sm text-gray-600'>{item?.status}</p>
              </div>
              <button onClick={getUserOrders} className='bg-gray-200 p-2 rounded cursor-pointer text-gray-700 text-xs'>Track Order</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Orders
