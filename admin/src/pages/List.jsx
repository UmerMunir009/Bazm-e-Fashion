import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl,currency } from '../App'
import { toast } from 'react-toastify';

const List = ({token}) => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list")

      if (response.data.success) {
        setProducts(response.data.products);
      }
      else {
        toast.error(products.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }


  }
  const handleDelete = async (item) => {
    try {
      const id=item._id;
      const response=await axios.post(backendUrl +"/api/product/remove",{id},{headers:{token}})
      if(response.data.success){
        toast.success(response.data.message)
        await fetchProducts();
        
      }
      else{
        toast.error(response.data.message)

      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
      
    }
  }


  useEffect(() => {

    fetchProducts()
  }, [])
  return (
    products.length !== 0?
    <>
      <p className='px-5 sm:px-10 pt-10 pb-5 text-gray-600'>All Products</p>
      <div className='px-5 sm:px-10 py-0 flex flex-col gap-2  '>

        <div className=' grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] p-2 text-[7px] md:text-[11px] bg-gray-200'>
          <b>Image</b><b>Name</b><b>Category</b><b>Sub Category</b><b className='text-center'>Price</b><b className='text-center'>Action</b>
        </div>
        {
          products.map((item, index) => (

            <div className='grid  rounded grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] bg-pink-100 p-2 items-center   ' key={index}>
              <img className='w-16 rounded ' src={item?.image[0]} alt="" />
              <p className='text-[6px] sm:text-[12px]'>{item?.name}</p>
              <p className='text-[8px] sm:text-[12px]'>{item?.category}</p>
              <p className='text-[8px] sm:text-[12px]'>{item?.subCategory}</p>
              <p className='text-[8px] sm:text-[12px] text-center'>{currency}{item?.price}</p>
              <p onClick={()=>handleDelete(item)} className='text-center cursor-pointer text-[8px] sm:text-[12px] bg-pink-800 rounded-full p-1 text-white'>X</p>
            </div>
          ))
        }
      </div>
    </>: <div className='text-center p-10 text-xl'> No items to Show</div>
      
  )
}

export default List
