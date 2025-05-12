import React from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
    <div className='w-[15%] sm:w-[18%] min-h-screen border-r-2 border-gray-400 ml-8 sm:ml-15'>
        <div className='mt-5 flex flex-col gap-3'>
            <NavLink to={'/add'} className='flex gap-2 md:gap-5 items-center border border-r-0 border-gray-400 p-2'>
                <img className='w-6 sm:w-5' src={assets?.add_icon} alt="" />
                <p className='text-gray-900  sm:text-sm hidden sm:block '>Add Item</p>
            </NavLink>
            <NavLink to={'/list'} className='flex gap-2 md:gap-5 items-center border border-r-0 border-gray-400 p-2'>
                <img className='w-6 sm:w-5' src={assets?.parcel_icon} alt="" />
                <p className='text-gray-900  sm:text-sm hidden sm:block '>All Items</p>
            </NavLink>
            <NavLink to={'/orders'} className='flex gap-2 md:gap-5 items-center border border-r-0 border-gray-400 p-2'>
                <img className='w-6 sm:w-5' src={assets?.order_icon} alt="" />
                <p className='text-gray-900  sm:text-sm hidden sm:block '>Orders</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default SideBar
