import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL //now use this variable accross the app



const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token') : '') 

  useEffect(()=>{
    localStorage.setItem('token', token) //setting the token in local storage to prevent the user from logging in again and automatically logout on refresh

  },[token])

  return (
    <div className='min-h-screen '>
      <ToastContainer position="bottom-right" autoClose={1500}  />
      {token === '' ? <Login setTheToken={setToken} /> :
        <>
          <NavBar setTheToken={setToken} />
          <hr className='text-gray-400 mx-8 sm:mx-15' />
          <div className='flex w-full '>
            <SideBar />
            <div>
              <Routes>
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/order' element={<Order token={token} />} />
              </Routes>
            </div>
          </div>

        </>
      }
    </div>
  )
}

export default App
