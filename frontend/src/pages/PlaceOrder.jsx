import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const [selectedMethod,setSelectedMethod]=useState('');
  const  navigate=useNavigate()
  return (
    <div className='flex flex-col lg:flex-row gap-4 border-t border-gray-300 min-h-[80vh]'>
      {/* Left Side */}
      <div className='flex flex-col mt-10 w-full md:w-3/4 lg:w-1/2 gap-2'>
        <div>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3 '>
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' required type="text" placeholder='First Name' />
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' required type="text" placeholder='Last Name' />
        </div>
          <input className='border rounded text-sm p-2 border-gray-300' type="email"  placeholder='E-mail (Optional)' />
          <input className='border rounded text-sm p-2 border-gray-300' type="text" required placeholder='Street' />
        <div className='flex gap-3 '>
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' required type="text" placeholder='City' />
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' required type="text" placeholder='Province' />
        </div>
        <div className='flex gap-3 '>
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' required type="text" placeholder='ZipCode' />
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' required type="text" placeholder='Country' />
        </div>
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' required type="number" placeholder='Phone Number' />

      </div>
      {/* Right Side */}
      <div className='md:min-w-[500px] flex  flex-col gap-5 lg:ml-10 mt-10  '>
        <CartTotal/>
        <Title text1={'PAYMENT'} text2={'METHODS'}/>        
        <div className='flex gap-3 flex-col lg:flex-row'>
                <div onClick={()=>setSelectedMethod('stripe')} className='flex items-center gap-3 border  border-gray-300 py-1 px-1 cursor-pointer'> 
                  <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${selectedMethod=== 'stripe'?'bg-green-700':''}`}></p>
                 <img className='h-4 mx-4' src={assets. stripe_logo} alt="" />
                </div>
                <div onClick={()=>setSelectedMethod('razorpay')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'> 
                  <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${selectedMethod=== 'razorpay'?'bg-green-700':''}`}></p>
                 <img className='h-5 mx-4' src={assets?.razorpay_logo} alt="" />
                </div>
                <div onClick={()=>setSelectedMethod('cod')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'> 
                      <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${selectedMethod=== 'cod'?'bg-green-700':''}`}></p>
                      <p className='text-gray-500 text-xs mx-4'>CASH ON DELIVERY </p>
                </div>
         </div>
         <div className='text-end'>
          <button onClick={()=>navigate('/orders')} className='bg-black cursor-pointer w-full text-white text-xs  py-3 px-2 mt-4 rounded'>PLACE ORDER</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
