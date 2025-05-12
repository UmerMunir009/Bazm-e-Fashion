import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({setTheToken}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async(e) => {
        try {
            e.preventDefault()
             //Now we will authenticate the admin using the api made in the backend
             const response = await axios.post(backendUrl + '/api/user/admin',{email,password}) //sending the email and password to the backend in the request body
             if(response.data.success){
             setTheToken(response.data.token) //setting the token to access the admin panel
             }
             else{
                toast.error(response.data.message) 
             }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong') 
            
        }

    }
  return (
    <div className='min-h-screen flex items-center justify-center w-full '>
      <div className='bg-white sm:shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className=' text-lg sm:text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3 min-w-30'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='abc@gmail.com' required className='rounded-md text-sm w-full px-3 py-2 border border-gray-300 outline-none' />
          </div>
          <div className='mb-3 min-w-30'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='8-digits' required  className='rounded-md text-sm w-full px-3 py-2 border border-gray-300 outline-none' />
          </div>
          <button className='bg-black cursor-pointer text-white p-2 rounded w-full ' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
