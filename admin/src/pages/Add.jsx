import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'



const Add = ({ token }) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0');
  const [category, setCategory] = useState('Men');
  const [subCategory, setsubCategory] = useState('Topwear');
  const [sizes, setSizes] = useState(['S'])
  const [bestSeller, setBestSeller] = useState(false);
  const [loader,setLoader]=useState(false);
  console.log(sizes)

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (sizes.length !== 0) {

      try {

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("subCategory", subCategory);
        formData.append("sizes", JSON.stringify(sizes)); // array->string bcoz array cant be passes into form data
        formData.append("bestseller", bestSeller);
        if (image1) formData.append("image1", image1);
        if (image2) formData.append("image2", image2);
        if (image3) formData.append("image3", image3);
        if (image4) formData.append("image4", image4);

        setLoader(true)
        const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } });
        setLoader(false)

        if(response.data.success){

          toast.success('Product uploaded.')

        }
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setBestSeller(false)
        setName('');
        setDescription('')
        setPrice('0')
        setSizes(['S'])


      } catch (error) {
        console.log(error)
      }
    }
    else {
      toast.error('Please select at least one size')
    }
  };


  return (
    <form onSubmit={handleFormSubmit} className='mr-8 sm:mr-15 p-2 sm:p-8 w-full flex flex-col gap-3 text-gray-500'>
      <h1 className='mb-3 text-sm text-gray-500 sm:text-md '>Upload Images</h1>
      <div className='flex gap-1 sm:gap-5'>
        <label htmlFor="image1">
          {image1 === false ?
            <img className='cursor-pointer w-12 md:w-30' src={assets?.upload_area} alt="" /> :
            <img className='cursor-pointer w-12 md:w-30' src={URL.createObjectURL(image1)} alt="" />
          }
        </label>
        <input onChange={(e) => setImage1(e.target.files[0])} required type="file" id="image1" hidden />
        <label htmlFor="image2">
          {image2 === false ?
            <img className='cursor-pointer w-12 md:w-30' src={assets?.upload_area} alt="" /> :
            <img className='cursor-pointer w-12 md:w-30' src={URL.createObjectURL(image2)} alt="" />
          }
        </label>
        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />

        <label htmlFor="image3">
          {image3 === false ?
            <img className='cursor-pointer w-12 md:w-30' src={assets?.upload_area} alt="" /> :
            <img className='cursor-pointer w-12 md:w-30' src={URL.createObjectURL(image3)} alt="" />
          }        </label>
        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />

        <label htmlFor="image4">
          {image4 === false ?
            <img className='cursor-pointer w-12 md:w-30' src={assets?.upload_area} alt="" /> :
            <img className='cursor-pointer w-12 md:w-30' src={URL.createObjectURL(image4)} alt="" />
          }        </label>
        <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
      </div>


      <div>
        <p className='text-md'>Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} required className='border rounded border-gray-400 outline-none py-1 px-2 w-full ' type="text" placeholder='name *' />
      </div>
      <div>
        <p className='text-md'>Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} required className='border rounded border-gray-400 outline-none py-1 px-2 w-full ' type="text" placeholder='description *' />
      </div>

      <div className='flex flex-col sm:flex-row gap-3 sm:gap-8 items-center'>
        <div className='flex flex-col gap-3'>
          <p className='text-md '>Product category</p>
          <select onChange={(e) => setCategory(e.target.value)} className='border text-sm rounded border-gray-400 outline-none py-1 px-2 w-full '>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className='flex flex-col gap-3'>
          <p className='text-md '>Sub category</p>
          <select onChange={(e) => setsubCategory(e.target.value)} className='border text-sm rounded border-gray-400 outline-none py-1 px-2 w-full '>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className='text-md'>Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='border rounded border-gray-400 outline-none py-1 px-2 w-full ' type="number" placeholder='25' />
        </div>
      </div>

      <div>
        <p>Available Sizes</p>
        <div className='flex gap-2 sm:gap-5 rounded  flex-col text-center sm:flex-row'>
          <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter((item) => item !== "S") : [...prev, "S"])}>
            <p className={`${sizes.includes('S') ? 'bg-black text-white' : 'bg-slate-200'}  px-3 py-3 sm:py-1   cursor-pointer text-xs`}>S</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter((item) => item !== "M") : [...prev, "M"])} >
            <p className={`${sizes.includes('M') ? 'bg-black text-white' : 'bg-slate-200'}  px-3 py-3 sm:py-1   cursor-pointer text-xs`}>M</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter((item) => item !== "L") : [...prev, "L"])} >
            <p className={`${sizes.includes('L') ? 'bg-black text-white' : 'bg-slate-200'}  px-3 py-3 sm:py-1   cursor-pointer text-xs`}>L</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter((item) => item !== "XL") : [...prev, "XL"])} >
            <p className={`${sizes.includes('XL') ? 'bg-black text-white' : 'bg-slate-200'}  px-3 py-3 sm:py-1   cursor-pointer text-xs`}>XL</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter((item) => item !== "XXL") : [...prev, "XXL"])} >
            <p className={`${sizes.includes('XXL') ? 'bg-black text-white' : 'bg-slate-200'}  px-3 py-3 sm:py-1   cursor-pointer text-xs`}>XXL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input className='checked:accent-black' onChange={() => setBestSeller(prev => !prev)} checked={bestSeller} type="checkbox" id="bestseller" />
        <label className="cursor-pointer text-sm" htmlFor="bestseller">Add to bestseller</label>
      </div>
      {loader?
      <button type="submit" className="w-28 py-3 cursor-pointer mt-4 bg-black text-white">Loading...</button>:
      <button type="submit" className="w-28 py-3 cursor-pointer mt-4 bg-black text-white">ADD</button>
    
}

    </form>
  )
}

export default Add

// onClick={(setSizes(prev => sizes.includes("M") ? sizes.filter((item) => item !== "M") : [...prev, "M"]))}

// onClick={(setSizes(prev => sizes.includes("L") ? sizes.filter((item) => item !== "L") : [...prev, "L"]))}


// onClick={(setSizes(prev => sizes.includes("XL") ? sizes.filter((item) => item !== "XL") : [...prev, "XL"]))}

// onClick={(setSizes(prev => sizes.includes("XXL") ? sizes.filter((item) => item !== "XXL") : [...prev, "XXL"]))}
// { `${sizes.includes('S')?'bg-black':'bg-slate-200'}  px-3 py-3 sm:py-1   cursor-pointer text-xs`}