import React from 'react'
import {assets} from './../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] justify-between gap-14 mt-15 mb-15'>
        <div className='flex flex-col gap-2'>
            <img src={assets?.logo} alt="" className='w-32 ' />
            <p className='w-full md:w-2/3 text-gray-600 text-xs '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque aspernatur odit necessitatibus, numquam rem dolore, aperiam fuga provident est reprehenderit autem maiores veritatis incidunt quod laboriosam</p>
        </div>
        <div className='flex flex-col gap-2'>
        <p className='font-bold'>COMPANY</p>
            <ul className='text-sm mt-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
               
            </ul>
            
        </div>
        
        <div>
            <p className='font-bold'>GET IN TOUCH</p>
            <ul className='text-sm mt-3 text-gray-600'>
                <li>03430468877</li>
                <li>umermunir@gmail.com</li>
               
            </ul>
        </div>

        
    </div>
    <div >
            <hr className='text-gray-400'/>
            <p className='text-xs text-gray-400 text-center py-5 mb-5'>Copyright2025@Bazm-e-Fashion-All Rights are Reserved</p>
        </div>
    </div>
  )
}

export default Footer