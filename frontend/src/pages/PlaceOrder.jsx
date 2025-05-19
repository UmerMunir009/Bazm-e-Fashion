import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import {  useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const [selectedMethod, setSelectedMethod] = useState('cod');
  const navigate = useNavigate()
  const { token, setCartItems, cartItems, delivery_fee, getTotalBillofCart,products,backendUrl} = useContext(ShopContext)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    province: '',
    zipCode: '',
    country: '',
    phoneNum: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({ ...data, [name]: value }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo)
            }
          }
        }
      }
      
      const orderData={
        address:formData,
        items:orderItems,
        amount:getTotalBillofCart() + delivery_fee
      }
      switch(selectedMethod){
        
        case 'cod':
          const response=await axios.post(backendUrl + '/api/order/cod',orderData,{headers:{token}})
          if(response.data.success){
            setCartItems({})
            navigate('/orders')
          }
          else{
            toast.error(response.data.message)
          }
          break;

        case 'stripe':
          break;

        default:
          break


      }



    } catch (error) {

    }
  }




  return (
    <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row gap-4 border-t border-gray-300 min-h-[80vh]'>
      {/* Left Side */}
      <div className='flex flex-col mt-10 w-full md:w-3/4 lg:w-1/2 gap-2'>
        <div>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3 '>
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' onChange={(e) => onChangeHandler(e)} name='firstName' value={formData.firstName} required type="text" placeholder='First Name' />
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' onChange={(e) => onChangeHandler(e)} name='lastName' value={formData.lastName} required type="text" placeholder='Last Name' />
        </div>
        <input className='border rounded text-sm p-2 border-gray-300' type="email" onChange={(e) => onChangeHandler(e)} name='email' value={formData.email} required placeholder='E-mail' />
        <input className='border rounded text-sm p-2 border-gray-300' type="text" onChange={(e) => onChangeHandler(e)} name='street' value={formData.street} required placeholder='Street' />
        <div className='flex gap-3 '>
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' onChange={(e) => onChangeHandler(e)} name='city' value={formData.city} required type="text" placeholder='City' />
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' onChange={(e) => onChangeHandler(e)} name='province' value={formData.province} required type="text" placeholder='Province' />
        </div>
        <div className='flex gap-3 '>
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' onChange={(e) => onChangeHandler(e)} name='zipCode' value={formData.zipCode} required type="text" placeholder='ZipCode' />
          <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' onChange={(e) => onChangeHandler(e)} name='country' value={formData.country} required type="text" placeholder='Country' />
        </div>
        <input className='border rounded text-sm p-2 border-gray-300 w-full outline-none' onChange={(e) => onChangeHandler(e)} name='phoneNum' value={formData.phoneNum} required type="number" placeholder='Phone Number' />

      </div>
      {/* Right Side */}
      <div className='md:min-w-[500px] flex  flex-col gap-5 lg:ml-10 mt-10  '>
        <CartTotal />
        <Title text1={'PAYMENT'} text2={'METHODS'} />
        <div className='flex gap-3 flex-col lg:flex-row'>
          <div onClick={() => setSelectedMethod('stripe')} className='flex items-center gap-3 border  border-gray-300 py-1 px-1 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${selectedMethod === 'stripe' ? 'bg-green-700' : ''}`}></p>
            <img className='h-4 mx-4' src={assets.stripe_logo} alt="" />
          </div>
          <div onClick={() => setSelectedMethod('razorpay')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${selectedMethod === 'razorpay' ? 'bg-green-700' : ''}`}></p>
            <img className='h-5 mx-4' src={assets?.razorpay_logo} alt="" />
          </div>
          <div onClick={() => setSelectedMethod('cod')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${selectedMethod === 'cod' ? 'bg-green-700' : ''}`}></p>
            <p className='text-gray-500 text-xs mx-4'>CASH ON DELIVERY </p>
          </div>
        </div>
        <div className='text-end'>
          <button type='submit' className='bg-black cursor-pointer w-full text-white text-xs  py-3 px-2 mt-4 rounded'>PLACE ORDER</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
