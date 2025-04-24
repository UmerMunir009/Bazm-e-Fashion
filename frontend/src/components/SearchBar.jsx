import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext);
    const [visible,setVisible]=useState(false)
    const location=useLocation(); //it gives current path or url 

    useEffect(()=>{//used to show search bar only on collection page
      if(location.pathname.includes('collection') ){
        setVisible(true)
      }
      else{
        setVisible(false)
      }

    },[location])
    
  return showSearch && visible ?(
    <div className='border-t border-b  bg-gray-50 text-center  '>
        <div className='inline-flex gap-2 items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>

        <input className='flex-1 bg-inherit text-sm outline-none' type="text" placeholder='Search'  value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <img className='w-4' src={assets?.search_icon} alt="" />
        
        </div>
        <img onClick={()=>setShowSearch(!showSearch)} className='w-4 inline cursor-pointer ' src={assets?.cross_icon} alt="" />

    </div>
  ):null
}

export default SearchBar