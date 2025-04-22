import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer bg-pink-200 p-2 rounded' to={`/product/${id}`}>
        <div className='overflow-hidden rounded'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-4 pb-2 text-xs'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem