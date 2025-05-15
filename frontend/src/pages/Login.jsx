import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loader,setLoader]=useState(false);

  const navigate = useNavigate()
  const { token, setToken, backendUrl } = useContext(ShopContext)

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      if (currentState === 'Sign Up') {
        setLoader(true)
        const response = await axios.post(backendUrl + "/api/user/register", { name, email, password })
        setLoader(false)
        if (response.data.success) {
          console.log(response.data.token)
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)
        }
      }
      else {
        setLoader(true)
        const response = await axios.post(backendUrl + "/api/user/login", { email, password })
        setLoader(false)
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)
        }

      }
    } catch (error) {
      console.log(error);
      resizeBy.json({ success: false, })

    }


  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-[90%] sm:max-w-100 items-center mt-20 m-auto gap-2 '>
      <div className='inline-flex items-center gap-2 mb-5'>
        <p className='text-2xl text-gray-700'>{currentState}</p>
        <hr className='border-none h-[1.7px] w-14 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} className='w-full border p-2 outline-none border-gray-400 text-sm' type="text" required placeholder='Name' />}
      <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full border p-2 outline-none border-gray-400 text-sm' required type="email" placeholder='E-Mail' />
      <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full border p-2 outline-none border-gray-400 text-sm' required type="password" placeholder='Password' />
      <div className='flex justify-between w-full items-center'>

        <p className='text-xs text-gray-500 cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Login' ? <p onClick={() => setCurrentState('Sign Up')} className='text-xs text-gray-500 cursor-pointer'>Create New Account</p> : <p onClick={() => setCurrentState('Login')} className='text-xs text-gray-500 cursor-pointer'>Login Here</p>
        }

      </div>
      <div >
        {currentState === 'Login' ? <button className='bg-black min-w-50 cursor-pointer rounded px-2 py-2 text-white  text-center'>{loader=== true?'Loading...':'Sign In'}</button> : <button className='bg-black min-w-50 cursor-pointer rounded px-2 py-2 text-white  text-center'>{loader=== true?'Loading...':'Sign Up'}</button>}
      </div>
    </form>
  )
}

export default Login
// bg-black cursor-pointer rounded px-2 py-2 text-white min-w-25 text-center
