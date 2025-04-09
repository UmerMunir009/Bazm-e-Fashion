import React from 'react'
import {assets} from './../assets/assets'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='py-4  flex justify-between items-center'>
      <img src={assets?.logo} className='w-36'/>
      <ul className=' hidden sm:flex sm:gap-5 lg:gap-14 sm:font-bold sm:text-sm lg:text-lg text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-0.5 hover:text-gray-500'>
          <p>HOME</p>
          <hr  className='hidden w-3/4 h-[1.5px] border-none bg-gray-700' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-0.5 hover:text-gray-500'>
          <p>COLLECTION</p>
          <hr className='hidden w-3/4 h-[1.5px] border-none bg-gray-700' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-0.5 hover:text-gray-500'>
          <p>ABOUT</p>
          <hr className='hidden w-3/4 h-[1.5px] border-none bg-gray-700' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-0.5 hover:text-gray-500'>
          <p>CONTACT</p>
          <hr className='hidden w-3/4 h-[1.5px] border-none bg-gray-700 ' />
        </NavLink>
       
      </ul>
      <div className='flex gap-5  items-center'>
        <img src={assets?.search_icon}  className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
          <div className='w-7 p-1 cursor-pointer rounded hover:bg-slate-200'>
          <img src={assets?.profile_icon} className=' ' alt="" />
          </div>
          <div className='hidden group-hover:block  absolute dropdown-menu right-0  pt-2'>
            <div className='flex flex-col gap-2 bg-slate-200 py-2 px-2 rounded w-50 text-slate-600  '>
              <p className='hover:text-black cursor-pointer'>My Profile</p>
              <p className='hover:text-black cursor-pointer'>Orders</p>
              <p className='hover:text-black cursor-pointer'>Logout</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default NavBar
