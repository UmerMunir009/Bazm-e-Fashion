import React from 'react'
import { assets } from '../assets/assets'

const NavBar = ({setTheToken}) => {
  const handleLogout = () => {
    localStorage.removeItem('token') //removing the token from local storage
    setTheToken('') //setting the token to empty string
  }
  return (
    <div className='flex justify-between items-center  my-3 mx-8 sm:mx-15'>
      <img className=' w-25 h-8 sm:w-40 sm:h-10' src={assets?.logo} alt="" />
      <button onClick={handleLogout} className='bg-gray-500  font-prata rounded-xl text-white text-sm py-1 sm:py-2 font-bold cursor-pointer sm:px-7 px-5'>Logout</button>  
    </div>

  )
}

export default NavBar
