import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div  className='flex flex-col sm:flex-row justify-around text-center gap-4 mt-15 mb-10'>
      <div className='flex flex-col items-center gap-2'>
        <img src={assets?.exchange_icon} className='w-10' alt="" />
        <p className='font-semibold text-sm'>Easy Exchange Policy</p>
        <p className='text-gray-500 text-xs'>We offer hassle free exchange policy</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <img src={assets?.quality_icon} className='w-10' alt="" />
        <p className='font-semibold text-sm'>7 Day Return Policy</p>
        <p className='text-gray-500 text-xs'>We provide 7 day free return service</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <img src={assets?.support_img} className='w-10' alt="" />
        <p className='font-semibold text-sm'>Best Customer Support</p>
        <p className='text-gray-500 text-xs'>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy