import React, { useContext} from 'react'

import { ShopContext } from '../context/ShopContext'
import Title from './../components/Title'


const CartTotal = () => {
    const {currency,getTotalBillofCart,delivery_fee}=useContext(ShopContext);

  return (
    <div className='flex flex-col    w-full sm:w-3/4'>
        <div>
        <Title text1={'CART'} text2={'TOTALS'}/>
        </div>
        <div className='flex flex-col gap-5 mt-3'>
          <div className='flex border-b border-gray-300 justify-between '>
               <p className='text-sm text-gray-600'>Sub-Total</p>
               <p className='text-sm'>{currency}{getTotalBillofCart()}.00</p>
          </div>
          <div className='flex border-b border-gray-300 justify-between'>
               <p className='text-sm text-gray-600'>Delivery Charges</p>
               <p className='text-sm'>{currency}{delivery_fee}.00</p>
          </div>
          <div className='flex border-b border-gray-300 justify-between '>
               <p className='text-sm text-gray-800 font-bold'>Total Charges</p>
               <p className='text-sm'>{currency} {getTotalBillofCart()===0? 0:getTotalBillofCart()+delivery_fee}.00</p>
          </div>
        </div>
       
      </div>
  )
}

export default CartTotal