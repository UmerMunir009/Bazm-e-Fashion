import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Orders = () => {
  const {products,currency}=useContext(ShopContext)
  return (
    <div  className='border-t border-gray-300 pt-15'>
      <div className='text-xl mb-5'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div>
        {products.slice(0,5).map((item,index)=>(
          <div className='border-b border-gray-300  py-3 flex flex-col sm:flex-row gap-2  sm:justify-between sm:items-center'>
            <div className='flex gap-3'>
              <img className='w-14 md:w-20 rounded' src={item?.image[0]} alt="" />
              <div className='flex flex-col gap-3'>
                <p className='text-sm text-gray-700 text-bold'>{item?.name}</p>
                <div className='flex gap-5 text-xs text-gray-500'>
                  <p>{currency}{item?.price}</p>
                  <p>Quantity : 1</p>
                  <p>Size : M</p>
                </div>
                <p className='text-xs text-gray-500'>Date : 25 July,2025</p>
              </div>
            </div>
            <div className='flex gap-10 items-center '>
              <div className='flex gap-1 items-center pl-4 sm:pl-0'>
              <p className='min-w-3 h-3 rounded-full bg-green-600'></p>
              <p className='text-sm text-gray-600'>Ready to Ship</p>
              </div>
              <button className='bg-gray-200 p-2 rounded cursor-pointer text-gray-700 text-xs'>Track Order</button>
            </div>
            
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Orders
