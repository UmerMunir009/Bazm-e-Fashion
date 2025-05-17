import React, { useContext, useState, useEffect } from 'react'
import { assets } from './../assets/assets'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';


const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch, countCartItems, token, setToken, setCartItems } = useContext(ShopContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('');
    setCartItems({})


  }
  //   useEffect(() => {
  //   console.log("Token changed:", token);
  // }, [token]);

  return (
    <div className='py-4  flex justify-between items-center'>
      <img onClick={() => navigate('/')} src={assets?.logo} className='w-40 cursor-pointer sm:w-50' />
      <ul className=' hidden sm:flex sm:gap-5 lg:gap-14 sm:font-bold sm:text-xs  text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-0.5 hover:text-gray-500'>
          <p>HOME</p>
          <hr className='hidden w-3/4 h-[1.5px] border-none bg-gray-700' />
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
        <Link to={'/collection'}>
          <img onClick={() => setShowSearch(!showSearch)} src={assets?.search_icon} className='w-5 cursor-pointer' alt="" />
        </Link>
        <div className='group relative'>
          <div className='w-7 p-1 cursor-pointer rounded hover:bg-slate-200'>

            <img onClick={() => token ? null : navigate('/login')} src={assets?.profile_icon} className=' ' alt="" />

          </div>
          {/* display only when user is logined */}
          {token &&
            <div className='hidden group-hover:block  absolute dropdown-menu right-0  pt-2'>
              <div className='flex flex-col gap-2 bg-slate-200 py-2 px-2 rounded w-45 text-slate-600  '>
                <p className='hover:text-black cursor-pointer hover:text-bold '>My Profile</p>
                <p onClick={()=>navigate('/orders')} className='hover:text-black cursor-pointer hover:text-bold '>Orders</p>
                <p onClick={handleLogout} className='hover:text-black cursor-pointer hover:text-bold'>Logout</p>
              </div>
            </div>
          }

        </div>
        <Link to={'/cart'} className='relative'>
          <img src={assets?.cart_icon} className="w-5 cursor-pointer" alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4  bg-black rounded-full text-[10px]  text-white'>{countCartItems()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets?.menu_icon} className='w-5 sm:hidden  cursor-pointer' alt="" />
      </div>

      {/* sidebar menu for smaller screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white  transition-all ${visible ? 'w-full' : 'w-0'}`}>

        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 bg-gray-100'>
            <img src={assets?.dropdown_icon} className='h-4 rotate-180' alt="" />
            <p className=''>Close</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='border-b border-gray-400 py-4 pl-6' to={'/'}>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='border-b border-gray-400 py-4 pl-6' to={'/collection'}>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='border-b border-gray-400 py-4 pl-6' to={'/contact'}>CONTACT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='border-b border-gray-400 py-4 pl-6' to={'/about'}>ABOUT</NavLink>
        </div>
      </div>



    </div>

  )
}

export default NavBar
