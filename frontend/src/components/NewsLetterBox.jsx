import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(event)=>{
        event.preventDefault()

    }
  return (
    <div className='text-center mt-20 mb-10 flex flex-col gap-3 '>
        <p className='font-bold  text-xl sm:text-2xl'>Subscribe now and get 20% OFF</p>
        <p className='text-gray-500 text-xs sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.</p>
        <form onSubmit={onSubmitHandler} className='flex w-full  justify-center items-center gap-3'>
  <input 
    className='w-full sm:w-1/2  outline-none px-3 py-2' 
    type="email" 
    placeholder='Enter your E-mail' 
    required
  />
  <button type='submit' className='bg-black text-white text-xs px-10 py-3'>
    SUBSCRIBE
  </button>
</form>
    </div>
  )
}

export default NewsLetterBox