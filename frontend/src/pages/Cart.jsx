import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './../components/Title'
import { assets } from '../assets/assets';

const Cart = () => {
  const {products,currency,cartItems,updateCartItems}=useContext(ShopContext);
  const [cartData,setCartData]=useState([]);

  

  useEffect(()=>{
    const tempData = [];
    for (const id in cartItems) {
       for (const sizee in cartItems[id]) {
          if (cartItems[id][sizee] > 0) {
             tempData.push({
              _id: id,
              size: sizee,
              quantity: cartItems[id][sizee]
      });
    }
  }
}
setCartData(tempData);

},[cartItems])

  
  return (
    <div className='border-t border-gray-300 pt-5'>
      <div className='text-2xl mb-5'>
         <Title text1={'YOUR'} text2={'CART ITEMS'}/>
      </div>

      <div>
        {
          cartData.map((item,index)=>{
            const productData=products.find(temp=>temp._id ===item._id);

            return(
              <div key={index} className='border-t border-b py-2 border-gray-300 items-center grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_3fr_0.2fr]'>
                <div className='flex gap-2 '>
                  <img className='w-20 sm:w-25' src={productData?.image[0]} alt="" />
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm sm:text-lg text-gray-600 font-small'>{productData?.name}</p>
                    <div className='flex gap-6 items-center'>
                      <p>{currency}{productData?.price}</p>
                      <p className='bg-black py-1 px-2 text-white text-xs'>{item?.size}</p>
                    </div>
                  </div>
                </div>
                <input className='max-w-7 sm:max-w-20 border border-gray-300 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item?.quantity} />
                <img onClick={()=>updateCartItems(item._id,item.size,0)} className=' w-4 sm:w-6 cursor-pointer' src={assets.bin_icon} alt="" />
              </div>
              
            )
          })
        }


      </div>

      
    </div>
  )
}

export default Cart
