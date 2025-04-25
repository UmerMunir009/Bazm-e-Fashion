import React from 'react'
import Title from './../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div >
      <div className='text-2xl border-t border-gray-300 pt-10 text-center'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='flex flex-col lg:flex-row items-center gap-15 '>
        <img className='w-full h-[30%] sm:w-[500px] rounded' src={assets?.about_img } alt="" />
        <div className='flex flex-col gap-5'>
        <p className='text-sm text-gray-500 text-center lg:text-md '>Bazm-e-Fashion is your go-to online destination for the latest trends in clothing that blend tradition with modern flair. We offer a diverse and carefully curated collection of apparel for men, women, and kids, ranging from elegant ethnic wear to chic casuals and contemporary fashion. At Bazm-e-Fashion, we believe that style is a form of self-expression, and our goal is to provide outfits that make you feel confident and comfortable, no matter the occasion.
        </p> 
        <p className='text-sm text-gray-500 text-center lg:text-md '>
        Whether you're shopping for festive celebrations, everyday wear, or a complete wardrobe makeover, you'll find quality fabrics, unique designs, and affordable prices—all in one place. Our user-friendly website ensures a smooth and secure shopping experience, with quick delivery and excellent customer service.

        Join the growing community of fashion lovers who trust Bazm-e-Fashion to stay stylish and up-to-date. Embrace your individuality, explore endless fashion possibilities, and let your wardrobe speak for you!</p>
        </div>
      </div>

      <div className='mt-10 mb-7'>
      <Title text1={'WHY'} text2={'CHOOSE US?'}/>        
      </div>
      
      <div className='flex flex-col lg:flex-row text-sm gap-5 justify-around  '>
        <div className='border border-gray-300 py-3 flex flex-col px-8  md:px-12 text-center gap-2 rounded-3xl'>
          <b>Quality Assurance</b>
          <p className='text-xs text-gray-500'>At Bazm-e-Fashion, we ensure premium quality by sourcing the best materials and maintaining strict checks on every product.</p>
        </div>
        <div className='border border-gray-300 py-3 flex flex-col px-8  md:px-12 text-center gap-2 rounded-3xl'>
          <b>Easy Return Policy</b>
          <p className='text-xs text-gray-500'>Not satisfied? No worries. Our hassle-free return policy allows you to return items within the specified time, no questions asked.</p>
        </div>
        <div className='border border-gray-300 py-3 flex flex-col px-8  md:px-12 text-center gap-2 rounded-3xl'>
          <b>Convenience</b>
          <p className='text-xs text-gray-500'>Enjoy a seamless shopping experience with easy navigation, secure payment options, quick delivery, and customer support just a click away.</p>
        </div>
        <div className='border border-gray-300 py-3 flex flex-col px-8  md:px-12 text-center gap-2 rounded-3xl'>
          <b>Easy Exchange Policy</b>
          <p className='text-xs text-gray-500'>Need a different size or color? Our simple exchange process makes it quick and effortless to swap your item with ease.</p>
        </div>

      </div>
      <NewsLetterBox/>
      <div className='mb-25'></div>
      
    </div>
  )
}

export default About
