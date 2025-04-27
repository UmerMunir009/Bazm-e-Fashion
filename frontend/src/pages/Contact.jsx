import React from 'react'
import Title from './../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from './../components/NewsLetterBox'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className='text-2xl border-t border-gray-300 pt-10 text-center'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='flex flex-col md:flex-row gap-7 justify-center'>
        <img  className='w-full md:max-w-[400px] rounded' src={assets?.contact_img} alt="" />
        <div className='flex flex-col gap-6 justify-center items-start'>
          <p className='text-xxl font-semibold text-gray-700'>Our Store</p>
          <p className='text-gray-600'>Punjab, Lahore <br />Defense Road (LDA) Near COMSATS</p>
          <p className='text-gray-600'>Tel : 0343-0468877 <br />umermunir1023@gmail.com</p>
          <p className='text-gray-600'>Learn more about our team and explore our <br />store now.</p>
          
          <button onClick={()=>navigate('/collection')} className='bg-white cursor-pointer text-black border border-gray-500 text-xs  py-3 px-2 mt-4 rounded hover:bg-black hover:text-white active:bg-white active:text-black min-w-40'>SHOP NOW</button>
        
        </div>

      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default Contact
