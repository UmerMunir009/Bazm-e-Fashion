import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <form className='mr-8 sm:mr-15 p-2 sm:p-8 w-full flex flex-col gap-3 text-gray-500'>
      <h1 className='mb-3 text-sm text-gray-500 sm:text-md '>Upload Images</h1>
      <div className='flex gap-1 sm:gap-5'>
        <label htmlFor="image1">
          <img className='cursor-pointer w-12 md:w-30' src={assets?.upload_area} alt="" />
        </label>
        <input required type="file" id="image1" hidden />
        <label htmlFor="image2">
          <img className='cursor-pointer w-12 md:w-30' src={assets?.upload_area} alt="" />
        </label>
        <input type="file" id="image2" hidden />

        <label htmlFor="image3">
          <img className='cursor-pointer w-12 md:w-30' src={assets?.upload_area} alt="" />
        </label>
        <input type="file" id="image3" hidden />

        <label htmlFor="image4">
          <img className='cursor-pointer w-12 md:w-30' src={assets?.upload_area} alt="" />
        </label>
        <input type="file" id="image4" hidden />
      </div>


      <div>
        <p className='text-md'>Name</p>
        <input required className='border rounded border-gray-400 outline-none py-1 px-2 w-full ' type="text" placeholder='name *' />
      </div>
      <div>
        <p className='text-md'>Description</p>
        <textarea required className='border rounded border-gray-400 outline-none py-1 px-2 w-full ' type="text" placeholder='description *' />
      </div>

      <div className='flex flex-col sm:flex-row gap-3 sm:gap-8 items-center'>
        <div className='flex flex-col gap-3'>
          <p className='text-md '>Product category</p>
          <select className='border text-sm rounded border-gray-400 outline-none py-1 px-2 w-full '>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className='flex flex-col gap-3'>
          <p className='text-md '>Sub category</p>
          <select className='border text-sm rounded border-gray-400 outline-none py-1 px-2 w-full '>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className='text-md'>Price</p>
          <input className='border rounded border-gray-400 outline-none py-1 px-2 w-full ' type="number" placeholder='name *' />
        </div>
      </div>

      <div>
  <p>Available Sizes</p>
  <div className='flex gap-2 sm:gap-5 rounded  flex-col text-center sm:flex-row'>
    <div>
      <p className='bg-slate-200 px-3 py-3 sm:py-1  cursor-pointer text-xs'>S</p>
    </div>
    <div>
      <p className='bg-slate-200 px-3 py-3 sm:py-1 cursor-pointer text-xs'>M</p>
    </div>
    <div>
      <p className='bg-slate-200 px-3 py-3 sm:py-1 cursor-pointer text-xs'>L</p>
    </div>
    <div>
      <p className='bg-slate-200 px-3 py-3 sm:py-1 cursor-pointer text-xs'>XL</p>
    </div>
    <div>
      <p className='bg-slate-200 px-3 py-3 sm:py-1 cursor-pointer text-xs'>XXL</p>
    </div>
  </div>
</div>

<div className="flex gap-2 mt-2">
      <input type="checkbox" id="bestseller" />
      <label className="cursor-pointer text-sm" htmlFor="bestseller">Add to bestseller</label>
    </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">ADD</button>

    </form>
  )
}

export default Add
