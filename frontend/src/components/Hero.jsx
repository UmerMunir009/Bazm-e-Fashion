import React from 'react'
import {assets} from './../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 mb-4 '>
        {/* left side */}
        <div className='w-full sm:w-1/2 flex flex-col text-[#414141] items-center justify-center  py-25 sm:py-40 '>
            <div className='flex  items-center gap-2'>
                <p className='w-8 md:w-13 h-[2px]  bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
                <p className='font-medium text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-13 h-[2px]  bg-[#414141]'></p>
            </div>

        </div>
        {/* right side */}
        <img className='w-full sm:w-1/2' src={assets?.hero_img} alt="" />

    </div>
  )
}

export default Hero