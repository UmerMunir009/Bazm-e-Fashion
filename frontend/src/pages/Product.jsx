import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ShopContext} from './../context/ShopContext'
import { assets } from '../assets/assets';
import Title from './../components/Title';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'react-toastify';

const Product = () => {
  const { productid } = useParams(); // Extract productid from the URL
  const {products,currency,addToCart} =useContext(ShopContext)
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('');
  const [selectedSize,setSelectedSize]=useState('');

  const fetchitemData= async()=>{
     products.map((item)=>{
      if(item._id ===productid){
        setProductData(item)
        setImage(item.image[0])
        return null
      }
     })
  
  }
  const handleAddToCartClick=()=>{
    if(selectedSize !== ''){
   addToCart(productData._id,selectedSize)
    toast.success("Item added to CART");
    }
    else{
      toast.error('Please select size first')
    }
  }

  useEffect(()=>{
    fetchitemData();

  },[productid,products])
  

  return productData? (
    <div className='border-t-2 border-gray-400 transition-opacity ease-in duration-600 opacity-100'>
      {/* product data UI */}
      <div className='flex flex-col md:flex-row gap-4 md:gap-12 mt-5 md:h-[450px]'>

        {/* images */}
        <div className='flex-1 flex flex-col gap-3 sm:flex-row '>
          <div className='flex w-full overflow-x-auto justify-between sm:flex-col   sm:overflow-y-auto  sm:justify-normal sm:w-[25%] '>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div>
            <img className='w-full sm:h-full ' src={image} alt="" />
          </div>

        </div>

        {/* rest info */}
        <div className='flex-1'>
          <h1 className='font-medium text-xl text-gray-700'>{productData.name}</h1>
          <div className='flex  gap-1 items-center mt-1'>
            <img className='w-4' src={assets?.star_icon} alt="" />
            <img className='w-4' src={assets?.star_icon} alt="" />
            <img className='w-4' src={assets?.star_icon} alt="" />
            <img className='w-4' src={assets?.star_icon} alt="" />
            <img className='w-4' src={assets?.star_dull_icon} alt="" />
            <p className='text-xs text-gray-600'>(112)</p>
          </div>
          <p className='mt-4 text-gray-800 text-2xl'>{currency}{productData?.price}</p>
          <p className='tet-medium mt-4 text-gray-500 '>{productData.description}</p>
          <div className='flex flex-col gap-10 mt-5 '>
            <div className='flex flex-row gap-3'>
              {
                productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSelectedSize(item)} className={`rounded p-2 text-sm w-12 cursor-pointer ${item===selectedSize? 'bg-black text-white' : 'bg-gray-200'}`} key={index}>{item}</button>

                ))
              }
              
            </div>
            <button  onClick={handleAddToCartClick} className='bg-black  text-white  max-w-1/3 p-2 py-4 active:bg-gray-600 cursor-pointer rounded text-xs'>ADD TO CART</button>
          </div>
            <hr className='text-gray-400 mt-3' />
            <div className='text-xs mt-8 flex flex-col gap-1 text-gray-500'>
              <p>100% Original Product</p>
              <p>Cash on delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>

        </div>

      </div>
      
      {/* additional things */}
      
     <div className='mt-20'> 
       <div className='flex'>
          <p className='border px-5 py-3 text-sm border-gray-300'>Description</p>
          <p className='border px-5 py-3 text-sm border-gray-300'>Reviews (122) </p> 
       </div>
       <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 border-gray-300'>
          <p>An e-commerce website is an online platform that facilitates the buying and sel An e-commerce website is an online platform that facilitates the buying and sel An e-commerce website is an online platform that facilitates the buying and sel An e-commerce website is an online platform that facilitates the buying and sel An e-commerce website is an online platform that facilitates the buying and sel </p>
          <p>E-commerce websites typically display products or services along with detailed An e-commerce website is an online platform that facilitates the buying and sel An e-commerce website is an online platform that facilitates the buying and sel </p>
       </div>
     </div>
     <div className='mt-10'>
      <Title  text1={'RELATED'} text2={'PRODUCTS'}/>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
     </div>

    </div>



  ): <div className='opacity-0'></div>
};

export default Product;
