import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from './../context/ShopContext'
import { assets } from '../assets/assets';
import ProductItem from './../components/ProductItem'
import Title from './../components/Title'

const Collection = () => {
  const {products,search,showSearch} =useContext(ShopContext);
  const [showFilters,setShowFilters]=useState(false);
  const [filteredProducts,setFilteredProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relavent');
  
  const addOrRemoveCategory=(value)=>{
    if(category.includes(value)){
      setCategory(prev=> prev.filter(item=>item !== value ))
    }
    else{
      setCategory(prev=>[...prev,value])
    }
  }
  const addOrRemoveSubCategory=(value)=>{
    if(subCategory.includes(value)){
      setSubCategory(prev=> prev.filter(item=>item !== value ))
    }
    else{
      setSubCategory(prev=>[...prev,value])
    }
  }

  const applyFilter=()=>{
    let productsCopy=products.slice();
    if (showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category))
    }    
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }
     setFilteredProducts(productsCopy);
  }

  const sortProducts=()=>{
    let productcopy=filteredProducts.slice();
    setFilteredProducts([]);
    switch(sortType){
      case 'low-high':
        setFilteredProducts(productcopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilteredProducts(productcopy.sort((a,b)=>(b.price-a.price)));
        break;
      default:
        applyFilter()
        break;
      

    }
  }


  useEffect(()=>{
   applyFilter()
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
   sortProducts()
  },[sortType])
  


  

  return (
    <div className='flex flex-col sm:flex-row gap-8 sm:gap-10  mt-5 '>
      {/* filter options */}
      <div className='min-w-60 sm:min-w-40 md:min-w-50 lg:min-w-60'>
        <p onClick={()=>showFilters?setShowFilters(false):setShowFilters(true)} className='text-lg  text-gray-700 mb-3 flex items-center gap-2 '>FILTERS
        <img className={`h-4 transform transition-transform duration-300 sm:hidden ${showFilters ? 'rotate-90' : 'rotate-0'}`}
        src={assets?.dropdown_icon} alt="" /> 
        </p>

        <div className={`border border-gray-300  pl-5 py-3 ${showFilters? '':'hidden'} sm:block`}>
          <p className='font-bold text-sm text-gray-600 mb-3'>CATEGORIES</p>
          <div className='flex flex-col text-xs text-gray-600 gap-3'>
            <p className='flex gap-2'>
              <input className=" checked:accent-black cursor-pointer" onChange={(e)=>addOrRemoveCategory(e.target.value)} type="checkbox" value={'Men'} />Men
            </p>
            <p className='flex gap-2'>
              <input className=" checked:accent-black cursor-pointer" onChange={(e)=>addOrRemoveCategory(e.target.value)} type="checkbox" value={'Women'} />Women
            </p>
            <p className='flex gap-2'>
              <input className=" checked:accent-black cursor-pointer" onChange={(e)=>addOrRemoveCategory(e.target.value)} type="checkbox" value={'Kids'} />Kids
            </p>
          </div>
        </div>

        <div className={`border border-gray-300  pl-5 py-3 mt-4 ${showFilters? '':'hidden'} sm:block`}>
          <p className='font-bold text-sm text-gray-600 mb-3'>TYPE</p>
          <div className='flex flex-col text-xs text-gray-600 gap-3'>
            <p className='flex gap-2'>
              <input className=" checked:accent-black cursor-pointer" onChange={(e)=>addOrRemoveSubCategory(e.target.value)} type="checkbox" value={'Topwear'} />Topwear
            </p>
            <p className='flex gap-2'>
              <input className=" checked:accent-black cursor-pointer" onChange={(e)=>addOrRemoveSubCategory(e.target.value)} type="checkbox" value={'Bottomwear'} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className=" checked:accent-black cursor-pointer" onChange={(e)=>addOrRemoveSubCategory(e.target.value)} type="checkbox" value={'Winterwear'} />Winterwear
            </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          <div className='flex gap-2 items-center'>
            <p className='text-sm text-gray-500'>Sort By :</p>
          <select onChange={(e)=>setSortType(e.target.value)} className='min-w-30 border rounded border-gray-400 text-xs p-1 mb-2 text-gray-400 ' >
          <option  value="Relavent">Relavent</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
          </select>
          </div>
          
        </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5 mb-5'>
    {filteredProducts.length>0?filteredProducts.map((item,index)=>(
        <ProductItem key={index} id={item?._id} name={item?.name} image={item?.image} price={item?.price}/>
        
    )):
    <div className='mt-5'><p className='text-lg text-gray-500'>No Items to show</p></div>

    }
    </div>
    </div>
      
      
    </div>
  )
}

export default Collection
