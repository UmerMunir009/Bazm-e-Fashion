import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {
    const {products} =useContext(ShopContext);
    const [filteredProducts,setFilteredProducts]=useState([]);

    useEffect(()=>{
        if(products.length>0){
            let copy=products.slice();
            copy=copy.filter(item=>item.category===category && item.subCategory === subCategory)
            setFilteredProducts(copy.slice(0,5))
        }

    },[products])
  return filteredProducts.length>0 ? (
    
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5 mb-5'>
    {filteredProducts.map((item,index)=>(
        <ProductItem  key={index} id={item?._id} name={item?.name} image={item?.image} price={item?.price}/>
    ))

    }
    </div>
  ):     <div className='mt-5'><p className='text-lg text-gray-500'>No Items to show</p></div>

}

export default RelatedProducts