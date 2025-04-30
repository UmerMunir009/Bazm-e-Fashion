import React, { useState } from 'react'

const Login = () => {
  const [currentState,setCurrentState]=useState('Sign Up')
  const onSubmitHandler=async (event)=>{
    event.preventDefault()

  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-[90%] sm:max-w-100 items-center mt-20 m-auto gap-2 '>
      <div className='inline-flex items-center gap-2 mb-5'>
        <p className='text-2xl text-gray-700'>{currentState}</p>
        <hr className='border-none h-[1.7px] w-14 bg-gray-800' />
      </div>
      {currentState === 'Login'?'':<input className='w-full border p-2 outline-none border-gray-400 text-sm' type="text" required placeholder='Name' />}
      <input className='w-full border p-2 outline-none border-gray-400 text-sm' required type="email" placeholder='E-Mail' />
      <input className='w-full border p-2 outline-none border-gray-400 text-sm' required type="password" placeholder='Password' />
       <div className='flex justify-between w-full items-center'>
   
        <p className='text-xs text-gray-500 cursor-pointer'>Forgot your password?</p>
        {
          currentState==='Login'? <p onClick={()=>setCurrentState('Sign Up')} className='text-xs text-gray-500 cursor-pointer'>Create New Account</p>: <p onClick={()=>setCurrentState('Login')} className='text-xs text-gray-500 cursor-pointer'>Login Here</p>
        }
        
       </div>
       <div >
        {currentState==='Login'? <button className='bg-black min-w-50 cursor-pointer rounded px-2 py-2 text-white  text-center'>Sign in</button>: <button className='bg-black min-w-50 cursor-pointer rounded px-2 py-2 text-white  text-center'>Sign up</button>}
       </div>
    </form>
  )
}

export default Login
// bg-black cursor-pointer rounded px-2 py-2 text-white min-w-25 text-center
