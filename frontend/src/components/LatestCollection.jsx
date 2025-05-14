import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './../components/Title';
import ProductItem from './../components/ProductItem'

const LatestCollection = () => {
    const {products}=useContext(ShopContext);
    const [latestProducts,setLatestProducts]=useState([]);
    useEffect(()=>{
      setLatestProducts(products.slice(0,12))
  }, [products])
  return (
    <div>
    <div className='text-center text-lg  pt-5 sm:text-2xl'>
    <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
    <p className='text-gray-500 text-xs pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita omnis dolorum consectetur distinctio.</p>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5 mb-5'>
    {latestProducts.map((item,index)=>(
        <ProductItem key={index} id={item?._id} name={item?.name} image={item?.image} price={item?.price}/>
    ))

    }
    </div>
    </div>
    
  )
}

export default LatestCollection